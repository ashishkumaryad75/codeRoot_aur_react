import React, { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef("");
  const password = useRef("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!!");
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log("entered Email Value : ", enteredEmail);
    console.log("entered Password Value : ", enteredPassword);

    const emailIsValid = enteredEmail.includes("@");
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);
    console.log("HTTP Request");
    
    // email.current.value = ""; // not recomanded coz directly manupulating the dom
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email} id="email" type="email" name="email" />
          <div className="control-error">
            {emailIsInvalid && <p>Please Enter a Valid Email Address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} id="password" type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
        {/* <button type="button" className="button" onClick={handleSubmit}>
          Login
        </button> */}
      </p>
    </form>
  );
}
