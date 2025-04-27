import React, { useState, useEffect } from 'react';
import './CatAnimation.css';

const importAll = (r) =>
  r.keys()
   .map(key => ({
     key,
     idx: parseInt((key.match(/cat(\d+)\.png$/) || [])[1], 10)
   }))
   .sort((a, b) => a.idx - b.idx)
   .map(item => r(item.key));

const catImages = importAll(
  require.context('../images/cat', false, /^\.\/cat\d+\.png$/)
);

const CatAnimation = ({ speed = 100 }) => {
  const [frame, setFrame] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(speed);

  useEffect(() => {
    catImages.forEach(src => { const img = new Image(); img.src = src; });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setFrame(prev => (prev + 1) % catImages.length);
    }, currentSpeed);
    return () => clearInterval(id);
  }, [currentSpeed]);

  return (
    <img
      src={catImages[frame]}
      alt={`cat frame ${frame + 1}`}
      className="cat-animation"
      onMouseEnter={() => setCurrentSpeed(60)}
      onMouseLeave={() => setCurrentSpeed(speed)}
    />
  );
};

export default CatAnimation;