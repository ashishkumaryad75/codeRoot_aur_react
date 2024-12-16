import React ,{useRef} from "react";

function Answers({answers, selectedAnswer,answerState, onSelect}) {

    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
      }

  return <>
  <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
              const isSelected = selectedAnswer === answer;
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
                    onClick={() => onSelect(answer)}
                    className={cssClasess}
                  >
                    {answer}
                  </button>
                </li>
              );
            })}
          </ul></>;
}

export default Answers;
