import React, { useState, useEffect } from 'react';
import './CatAnimation.css';

const context = require.context('../../assets/images/cat', false, /cat.*\.png$/);
const catFrames = context.keys()
    .map(key => ({
        src: context(key),
        index: parseInt(key.match(/cat(\d+)\.png$/)[1], 10)
    }))
    .sort((a, b) => a.index - b.index)
    .map(obj => obj.src);

const CatAnimation = ({ speed = 100 }) => {
    const [frameIndex, setFrameIndex] = useState(0);
    const [intervalMs, setIntervalMs] = useState(speed);

    useEffect(() => {
        catFrames.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        const timerId = setInterval(() => {
            setFrameIndex(prev => (prev + 1) % catFrames.length);
        }, intervalMs);

        return () => clearInterval(timerId);
    }, [intervalMs]);

    return (
        <img
            src={catFrames[frameIndex]}
            alt={`-cat-frames-${frameIndex}`}
            className="cat-animation"
            onMouseEnter={() => setIntervalMs(60)}
            onMouseLeave={() => setIntervalMs(speed)}
        />
    );
};

export default CatAnimation;