import { useState } from 'react';
import { config } from '../config';
import './QuestionCard.css';

function QuestionCard({ onYes }) {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noAttempts, setNoAttempts] = useState(0);

  const handleNoHover = () => {
    const messages = [
      "Are you sure? 🥺",
      "Really? Think again! 💔",
      "Please reconsider! 😢",
      "Don't break my heart! 💔",
      "One more chance? 🙏"
    ];
    
    if (noAttempts < messages.length) {
      alert(messages[noAttempts]);
      setNoAttempts(noAttempts + 1);
    }

    // Move the button to a random position
    const container = document.querySelector('.button-container');
    const containerRect = container.getBoundingClientRect();
    
    const newLeft = Math.random() * (containerRect.width - 200);
    const newTop = Math.random() * 200;
    
    setNoButtonStyle({
      position: 'absolute',
      left: `${newLeft}px`,
      top: `${newTop}px`,
      transition: 'all 0.3s ease'
    });
  };

  return (
    <div className="question-card">
      <h2>{config.content.title}</h2>
      <p>{config.content.subtitle}</p>
      <div className="button-container">
        <button className="btn btn-yes" onClick={onYes}>
          {config.content.yesButtonText}
        </button>
        <button 
          className="btn btn-no" 
          onMouseEnter={handleNoHover}
          onClick={handleNoHover}
          style={noButtonStyle}
        >
          {config.content.noButtonText}
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
