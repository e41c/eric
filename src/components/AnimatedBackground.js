// react-portfolio/src/components/AnimatedBackground.js
import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const AnimatedBackground = () => {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');

    anime({
      targets: circles,
      scale: [
        { value: .1, easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1200 }
      ],
      delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });
  }, []);

  return (
    <div className="animated-background">
      {[...Array(70)].map((e, i) => <div key={i} className="circle"></div>)}
    </div>
  );
};

export default AnimatedBackground;
