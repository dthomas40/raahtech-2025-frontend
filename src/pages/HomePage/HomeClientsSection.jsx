import React, { useEffect, useState, useRef } from 'react';
import './HomeClientsSection.css';

const logoModules = import.meta.glob('../../assets/RaahClientLogos/*.png', { eager: true });
const ALL_LOGOS = Object.values(logoModules).map(mod => mod.default);

const GRID_SIZE_DESKTOP = 15;
const GRID_SIZE_MOBILE = 9;

const HomeClientsSection = () => {
    const [gridSize, setGridSize] = useState(GRID_SIZE_DESKTOP);
    const [gridImages, setGridImages] = useState([]);
    const updateQueueRef = useRef([]);
    const imagesRef = useRef([]);

    useEffect(() => {
        const updateGridSize = () => {
            const isMobile = window.innerWidth <= 768;
            setGridSize(isMobile ? GRID_SIZE_MOBILE : GRID_SIZE_DESKTOP);
        };
        updateGridSize();
        window.addEventListener('resize', updateGridSize);
        return () => window.removeEventListener('resize', updateGridSize);
    }, []);

    useEffect(() => {
        const usedLogoIndices = new Set();
        const initialImages = [];
        while (initialImages.length < gridSize) {
            const randomIndex = Math.floor(Math.random() * ALL_LOGOS.length);
            if (!usedLogoIndices.has(randomIndex)) {
                usedLogoIndices.add(randomIndex);
                initialImages.push({
                    src: ALL_LOGOS[randomIndex],
                    key: `${randomIndex}-${Date.now()}`
                });
            }
        }
        imagesRef.current = initialImages;
        setGridImages(initialImages);
        updateQueueRef.current = shuffleArray([...Array(gridSize).keys()]);
    }, [gridSize]);

    const shuffleArray = (array) => {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (updateQueueRef.current.length === 0) {
                updateQueueRef.current = shuffleArray([...Array(gridSize).keys()]);
            }

            const gridIndexToUpdate = updateQueueRef.current.pop();
            const currentLogoIndices = new Set(imagesRef.current.map(img => ALL_LOGOS.indexOf(img.src)));

            let newLogoIndex;
            const availableIndices = ALL_LOGOS.map((_, i) => i).filter(i => !currentLogoIndices.has(i));

            if (availableIndices.length === 0) {
                newLogoIndex = Math.floor(Math.random() * ALL_LOGOS.length);
            } else {
                newLogoIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
            }

            const newImages = [...imagesRef.current];
            newImages[gridIndexToUpdate] = {
                src: ALL_LOGOS[newLogoIndex],
                key: `${newLogoIndex}-${Date.now()}`
            };

            imagesRef.current = newImages;
            setGridImages(newImages);
        }, 1000);

        return () => clearInterval(interval);
    }, [gridSize]);

    return (
        <div className='HomeClientsSectionContainer'>
            <div className='HomeClientsSectionIntro'>
                <h2 className='HomeClientsSectionIntroTitle'>
                    Built for Identity Across Industries and Ecosystems
                </h2>
                <p className='HomeClientsSectionIntroDescription'>
                    From healthcare and logistics to finance and retail, we help organizations navigate identity complexity across workforce, partners, and customers.
                </p>
            </div>
            <div className={`HomeClientsSectionGrid ${gridSize === GRID_SIZE_MOBILE ? 'mobile' : 'desktop'}`}>
                {gridImages.map((img, index) => (
                    <div key={index} className='HomeClientsSectionGridCell'>
                        {img && (
                            <img
                                key={img.key}
                                src={img.src}
                                className='HomeClientsSectionGridImage fade'
                                alt=""
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeClientsSection;