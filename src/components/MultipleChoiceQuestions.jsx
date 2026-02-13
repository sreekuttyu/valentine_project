import { useState } from 'react';
import { config } from '../config';
import './MultipleChoiceQuestions.css';

function MultipleChoiceQuestions({ onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showWrongMessage, setShowWrongMessage] = useState(false);
  const [isAnswering, setIsAnswering] = useState(false);

  const questions = config.questions || [];
  const currentQuestion = questions[currentQuestionIndex];

  // Debug logging
  console.log('MultipleChoiceQuestions - Questions:', questions);
  console.log('MultipleChoiceQuestions - Current Question Index:', currentQuestionIndex);
  console.log('MultipleChoiceQuestions - Current Question:', currentQuestion);

  const handleAnswerClick = (option) => {
    if (isAnswering) return;
    setIsAnswering(true);

    if (option.correct) {
      // Correct answer - proceed to next question or complete
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setIsAnswering(false);
        } else {
          // All questions completed
          onComplete();
        }
      }, 300);
    } else {
      // Wrong answer - show popup
      setShowWrongMessage(true);
      setTimeout(() => {
        setShowWrongMessage(false);
        setIsAnswering(false);
      }, 2000);
    }
  };

  if (!questions.length) {
    console.log('No questions found, calling onComplete immediately');
    // If no questions are available, go directly to success page
    setTimeout(() => onComplete(), 100);
    return (
      <div className="multiple-choice-container">
        <div className="question-card-mc">
          <h2>Loading questions...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="multiple-choice-container">
      {/* Wrong answer popup */}
      {showWrongMessage && (
        <div className="wrong-popup">
          <div className="wrong-popup-content">
            <h3>{currentQuestion.wrongMessage}</h3>
            <div className="skull-animation">💀</div>
          </div>
        </div>
      )}

      <div className="question-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
          ></div>
        </div>
        <span className="progress-text">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>

      <div className="question-card-mc">
        <h2>{currentQuestion.title}</h2>
        
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${isAnswering ? 'disabled' : ''}`}
              onClick={() => handleAnswerClick(option)}
              disabled={isAnswering}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="hearts-decoration">
          {'💕'.repeat(5)}
        </div>
      </div>
    </div>
  );
}

export default MultipleChoiceQuestions;