import React, { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  function changeTextHandler() {
    setChangeText(true);
  }
  return (
    <>
      <div>
        <h3>Hello World!!</h3>
        {!changeText && <p>It's Good To see You..</p>}
        {changeText && <p>Changed!!</p>}
        <button onClick={changeTextHandler}>Change Text!!</button>
      </div>
    </>
  );
};

export default Greeting;
