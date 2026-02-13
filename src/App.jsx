import { useState, useEffect } from 'react';
import { config } from './config';
import FloatingHearts from './components/FloatingHearts';
import QuestionCard from './components/QuestionCard';
import MultipleChoiceQuestions from './components/MultipleChoiceQuestions';
import SuccessPage from './components/SuccessPage';
import './App.css';

function App() {
  const [answered, setAnswered] = useState(false);
  const [questionsCompleted, setQuestionsCompleted] = useState(false);

  // Reset function to start over
  const handleReset = () => {
    setAnswered(false);
    setQuestionsCompleted(false);
  };

  useEffect(() => {
    // Apply theme colors from config
    const theme = config.theme;
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
    document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
    document.documentElement.style.setProperty('--font-family', theme.fontFamily);
  }, []);

  const handleYes = () => {
    setAnswered(true);
    
    // Confetti effect
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-50px';
        heart.style.fontSize = '30px';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);
        
        let pos = -50;
        const interval = setInterval(() => {
          pos += 5;
          heart.style.top = pos + 'px';
          if (pos > window.innerHeight) {
            clearInterval(interval);
            heart.remove();
          }
        }, 20);
      }, i * 30);
    }
  };

  const handleQuestionsComplete = () => {
    setQuestionsCompleted(true);
    
    // Extra celebration for completing all questions
    for (let i = 0; i < 150; i++) {
      setTimeout(() => {
        const emojis = ['💕', '💖', '💗', '💘', '💝', '🌹', '⭐'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const heart = document.createElement('div');
        heart.innerHTML = emoji;
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-50px';
        heart.style.fontSize = '35px';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);
        
        let pos = -50;
        const interval = setInterval(() => {
          pos += 5;
          heart.style.top = pos + 'px';
          if (pos > window.innerHeight) {
            clearInterval(interval);
            heart.remove();
          }
        }, 20);
      }, i * 20);
    }
  };

  return (
    <div className="app">
      <FloatingHearts />
      
      <div className="container">
        <div className="header">
          <h1>To {config.names.receiver} 💝</h1>
          <p>From {config.names.sender} with all my love</p>
          
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <button 
              onClick={handleReset}
              style={{
                background: 'rgba(255, 69, 0, 0.8)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {!answered ? (
          <QuestionCard onYes={handleYes} />
        ) : !questionsCompleted ? (
          <MultipleChoiceQuestions onComplete={handleQuestionsComplete} />
        ) : (
          <SuccessPage />
        )}
      </div>
    </div>
  );
}

export default App;
