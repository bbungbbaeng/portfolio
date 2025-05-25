import React, { useState, useEffect } from 'react';
import './CatAnimation.css';

const catFrames = (() => {
    const modules = import.meta.glob(
        '../../assets/images/cat/cat*.png',
        { eager: true, as: 'url' }
    );

    return Object.entries(modules)
        .map(([path, url]) => ({
            url,
            index: parseInt(path.match(/cat(\d+)\.png$/)[1], 10),
        }))
        .sort((a, b) => a.index - b.index)
        .map(frame => frame.url);
})();

const CatAnimation = ({speed = 100}) => {
    const [frameIndex, setFrameIndex] = useState(0);
    const [intervalMs, setIntervalMs] = useState(speed);

    useEffect(() => {
        catFrames.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        const timerId = setInterval(() => {
            setFrameIndex((prev) => (prev + 1) % catFrames.length);
        }, intervalMs);

        return () => clearInterval(timerId);
    }, [intervalMs]);

    return (
        <img src={catFrames[frameIndex]} alt={`-cat-frames-${frameIndex}`} className="cat-animation" onMouseEnter={() => setIntervalMs(60)} onMouseLeave={() => setIntervalMs(speed)} />
    );
}

export default CatAnimation;