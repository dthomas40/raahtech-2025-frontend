import React, { useEffect, useMemo, useRef, useState } from "react";
import "./HomeAwardsSection.css";

const toSortedSrcArray = (modules) =>
    Object.keys(modules)
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
        .map((k) => modules[k]?.default)
        .filter(Boolean);

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

const getVisibleCount = () => {
    const w = window.innerWidth;
    if (w <= 768) return 2;
    if (w <= 1200) return 5;
    return 5;
};

export default function HomeAwardsSection({
    height = 20,
    secondsPerLoop = 40,
    className = "",
}) {
    const [theme, setTheme] = useState(() => {
        const attr = document.documentElement.getAttribute("data-theme");
        if (attr === "dark" || attr === "light") return attr;
        const stored = localStorage.getItem("theme");
        return stored === "dark" ? "dark" : "light";
    });
    useEffect(() => {
        const root = document.documentElement;
        const mo = new MutationObserver(() => {
            const t = root.getAttribute("data-theme");
            if (t === "dark" || t === "light") setTheme(t);
        });
        mo.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
        const onStorage = (e) => {
            if (e.key === "theme" && (e.newValue === "dark" || e.newValue === "light")) setTheme(e.newValue);
        };
        window.addEventListener("storage", onStorage);
        return () => { mo.disconnect(); window.removeEventListener("storage", onStorage); };
    }, []);

    const [visible, setVisible] = useState(() =>
        typeof window !== "undefined" ? getVisibleCount() : 5
    );
    useEffect(() => {
        const onResize = () => setVisible(getVisibleCount());
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const badges = useMemo(
        () => (theme === "dark" ? DARK_BADGES : LIGHT_BADGES),
        [theme]
    );

    const count = badges.length;
    const bannerRef = useRef(null);

    if (!count) return null;
    const baseDuration = secondsPerLoop;
    const items = badges.map((src, idx) => {
        const delay = -(baseDuration / count) * (count - (idx + 1));
        return { src, delay };
    });

    const varHeight = typeof height === "number" ? `${height}em` : height;

    return (
        <section
            ref={bannerRef}
            className={`HomeAwardsSectionContainer ${className}`}
            aria-label="Award badges"
            style={{
                ["--awards-height"]: varHeight,
                ["--visible"]: visible,
                ["--count"]: count,
                ["--loop"]: `${baseDuration}s`,
            }}
        >
            <div className="HomeAwardsSectionAwardsCarousel">
                {items.map((it, i) => (
                    <div
                        key={`${it.src}-${i}`}
                        className="HomeAwardsSectionAwardsLogo"
                        style={{
                            animationDelay: `${it.delay}s`,
                        }}
                    >
                        <img src={it.src} alt="" decoding="async" />
                    </div>
                ))}
            </div>
        </section>
    );
}
