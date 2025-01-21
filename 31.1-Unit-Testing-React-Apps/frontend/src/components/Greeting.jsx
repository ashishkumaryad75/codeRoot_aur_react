import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  function changeTextHandler() {
    // setChangeText((changeText) => !changeText);
    setChangeText(true);
  }
  return (
    <>
      <div>
        <h3>Hello World!!</h3>
        {!changeText && <Output>It's Good To see You..</Output>}
        {changeText && <Output>Changed!!</Output>}
        <button onClick={changeTextHandler}>Change Text!!</button>
      </div>
    </>
  );
};

export default Greeting;

