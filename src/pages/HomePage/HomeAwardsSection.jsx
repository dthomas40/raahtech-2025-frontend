import React, { useEffect, useMemo, useRef, useState } from "react";
import "./HomeAwardsSection.css";

/** Helper: turn ".../Best-Award_2025.webp" ➜ "Best Award 2025" for alt text */
const altFromSrc = (src) => {
    try {
        const file = src.split("/").pop()?.split(".")[0] ?? "";
        const pretty = file.replace(/[-_]+/g, " ").trim();
        return pretty || "";
    } catch {
        return "";
    }
};

const toSortedSrcArray = (modules) =>
    Object.keys(modules)
        .sort((a, b) =>
            a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
        )
        .map((k) => modules[k]?.default)
        .filter(Boolean);

/** Eagerly import badge images for both themes (Vite) */
const lightModules = import.meta.glob(
    "../../assets/LightModeAwards/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG,webp,WEBP,gif,GIF}",
    { eager: true }
);
const darkModules = import.meta.glob(
    "../../assets/DarkModeAwards/*.{png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG,webp,WEBP,gif,GIF}",
    { eager: true }
);

const LIGHT_BADGES = toSortedSrcArray(lightModules);
const DARK_BADGES = toSortedSrcArray(darkModules);

/** Fixed slot count so spacing/animation never changes when theme flips */
const SLOT_COUNT = Math.max(LIGHT_BADGES.length, DARK_BADGES.length);

/** Responsive visible count (how many slots should be visible at once) */
const getVisibleCount = () => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (w <= 768) return 2;
    if (w <= 1200) return 5;
    return 6; // one extra on large screens
};

export default function HomeAwardsSection({
    height = 20,
    secondsPerLoop = 40,
    className = "",
    pauseOnHover = true,
    decorative = false, // if true, alt=""
}) {
    /** Theme detection via data-theme + localStorage, with live updates */
    const [theme, setTheme] = useState(() => {
        if (typeof document === "undefined") return "light";
        const attr = document.documentElement.getAttribute("data-theme");
        if (attr === "dark" || attr === "light") return attr;
        const stored = localStorage.getItem("theme");
        return stored === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        if (typeof document === "undefined") return;
        const root = document.documentElement;
        const mo = new MutationObserver(() => {
            const t = root.getAttribute("data-theme");
            if (t === "dark" || t === "light") setTheme(t);
        });
        mo.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

        const onStorage = (e) => {
            if (e.key === "theme" && (e.newValue === "dark" || e.newValue === "light")) {
                setTheme(e.newValue);
            }
        };
        window.addEventListener("storage", onStorage);
        return () => {
            mo.disconnect();
            window.removeEventListener("storage", onStorage);
        };
    }, []);

    /** Visible slot count */
    const [visible, setVisible] = useState(() =>
        typeof window !== "undefined" ? getVisibleCount() : 5
    );
    useEffect(() => {
        const onResize = () => setVisible(getVisibleCount());
        if (typeof window !== "undefined") {
            onResize();
            window.addEventListener("resize", onResize);
            return () => window.removeEventListener("resize", onResize);
        }
    }, []);

    /** Respect prefers-reduced-motion */
    const [reducedMotion, setReducedMotion] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReducedMotion(!!mq.matches);
        update();
        mq.addEventListener?.("change", update);
        return () => mq.removeEventListener?.("change", update);
    }, []);

    /** Pick a source for each fixed slot, wrapping if a set is shorter */
    const badges = useMemo(() => {
        const set = theme === "dark" ? DARK_BADGES : LIGHT_BADGES;
        if (!SLOT_COUNT || !set.length) return [];
        return Array.from({ length: SLOT_COUNT }, (_, i) => set[i % set.length]);
    }, [theme]);

    const count = SLOT_COUNT;
    const bannerRef = useRef(null);

    if (!count) return null;

    /** Evenly staggered animation delays so positions stay consistent */
    const baseDuration = secondsPerLoop;
    const items = badges.map((src, idx) => {
        const delay = -(baseDuration / count) * (count - (idx + 1));
        return { src, delay, idx };
    });

    const varHeight = typeof height === "number" ? `${height}em` : height;

    return (
        <section
            ref={bannerRef}
            className={`HomeAwardsSectionContainer ${pauseOnHover ? "pause-on-hover" : ""
                } ${className}`}
            aria-label="Award badges"
            style={{
                ["--awards-height"]: varHeight,
                ["--visible"]: visible,
                ["--count"]: count,
                ["--loop"]: reducedMotion ? "0s" : `${baseDuration}s`,
            }}
        >
            <div className="HomeAwardsSectionAwardsCarousel" role="list" aria-live="off">
                {items.map((it) => (
                    <div
                        key={`slot-${it.idx}`} // stable across theme changes
                        className="HomeAwardsSectionAwardsLogo"
                        role="listitem"
                        style={{ animationDelay: `${it.delay}s` }}
                    >
                        <img
                            src={it.src}
                            alt={decorative ? "" : altFromSrc(it.src)}
                            decoding="async"
                            loading="lazy"
                            width="240"
                            height="120"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
