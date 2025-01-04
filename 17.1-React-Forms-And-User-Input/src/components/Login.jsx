import React, { useRef } from "react";

export default function Login() {
  const email  =useRef('');
  const password  =useRef('');

  
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!!");
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log("entered Email Value : ", enteredEmail);
    console.log("entered Password Value : ", enteredPassword);
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={email}
            id="email"
            type="email"
            name="email"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password}
            id="password"
            type="password"
            name="password"
          />
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
