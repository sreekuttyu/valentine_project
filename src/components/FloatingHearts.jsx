import { useEffect, useState } from 'react';
import './FloatingHearts.css';

function FloatingHearts() {
  const [hearts] = useState(() => {
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    const positions = [];
    
    for (let i = 0; i < 15; i++) {
      positions.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        heart: heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
      });
    }
    
    return positions;
  });

  return (
    <div className="hearts-background">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: heart.animationDelay
          }}
        >
          {heart.heart}
        </div>
      ))}
    </div>
  );
}

export default FloatingHearts;
