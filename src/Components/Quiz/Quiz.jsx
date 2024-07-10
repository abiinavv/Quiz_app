import React, { useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const question = data[index];

  const checkAns = (e, ans) => {
    if (!isAnswered) {
      setSelectedAnswer(ans);
      setIsAnswered(true);

      if (question.ans === ans) {
        e.target.classList.add("correct");
        setScore(score + 1);
      } else {
        e.target.classList.add("wrong");
      }
    }
  };

  const nextQuestion = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      alert(`Quiz Completed! Your score is ${score}/${data.length}`);
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    document.querySelectorAll('.container ul li').forEach((li) => {
      li.classList.remove('correct', 'wrong');
    });
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h3>{index + 1}. {question.question}</h3>
      <ul>
        <li
          className={
            selectedAnswer === 1
              ? question.ans === 1
                ? "correct"
                : "wrong"
              : ""
          }
          onClick={(e) => { checkAns(e, 1) }}
        >
          {question.option1}
        </li>
        <li
          className={
            selectedAnswer === 2
              ? question.ans === 2
                ? "correct"
                : "wrong"
              : ""
          }
          onClick={(e) => { checkAns(e, 2) }}
        >
          {question.option2}
        </li>
        <li
          className={
            selectedAnswer === 3
              ? question.ans === 3
                ? "correct"
                : "wrong"
              : ""
          }
          onClick={(e) => { checkAns(e, 3) }}
        >
          {question.option3}
        </li>
        <li
          className={
            selectedAnswer === 4
              ? question.ans === 4
                ? "correct"
                : "wrong"
              : ""
          }
          onClick={(e) => { checkAns(e, 4) }}
        >
          {question.option4}
        </li>
      </ul>
      <button onClick={nextQuestion} disabled={!isAnswered}>Next</button>
      <button onClick={resetQuiz}>Reset</button>
      <div className="index">{index + 1} of {data.length} questions</div>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${((index + 1) / data.length) * 100}%` }}></div>
      </div>
    </div>
  );
};

export default Quiz;
