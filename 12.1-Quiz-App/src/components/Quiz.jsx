import React from "react";
import { useState } from "react";
import QUESTIONS from "../questions.js";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelecteAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <>
      <div id="quiz">
        <div id="question">
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
              <li key={answer} className="answer">
                <button onClick={() => handleSelecteAnswer(answer)}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Quiz;
