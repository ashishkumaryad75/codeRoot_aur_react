import React from "react";
import { useState } from "react";

function Quiz() {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
  

  return (
    <>
      <p>Currnetly Active Questions.</p>
    </>
  );
}

export default Quiz;
