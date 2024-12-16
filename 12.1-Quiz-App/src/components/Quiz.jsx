import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelecteAnswer = useCallback(
    function handleSelecteAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelecteAnswer(null);
  }, [handleSelecteAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz Complete" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <>
      <div id="quiz">
        <div id="question">
          <QuestionTimer
            key={activeQuestionIndex}
            timeout={10000}
            onTimeout={handleSkipAnswer}
          />
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {shuffledAnswers.map((answer) => {
              const isSelected = userAnswers[userAnswers.length - 1] === answer;
              let cssClasess = "";
              if (answerState === "answered" && isSelected) {
                cssClasess = "selected";
              }
              if (
                (answerState === "correct" || answerState === "wrong") &&
                isSelected
              ) {
                cssClasess = answerState;
              }

              return (
                <li key={answer} className="answer">
                  <button
                    onClick={() => handleSelecteAnswer(answer)}
                    className={cssClasess}
                  >
                    {answer}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Quiz;
