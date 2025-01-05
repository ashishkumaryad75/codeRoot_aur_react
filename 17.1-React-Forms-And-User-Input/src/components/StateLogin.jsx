import React, { useState } from "react";

export default function StateLogin() {
  const [enteredValues, setEenteredValues] = useState({
    email: "",
    password: "",
  });
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!!");
    console.log("entered Email Value : ", enteredValues.email);
    console.log("entered Password Value : ", enteredValues.password);

    setEenteredValues({
      email: "",
      password: "",
    }); // resetting the form data

    // console.log("entered Email : ", enteredEmail);
    // console.log("entered Password : ", enteredPassword);
  }

  const emailIsInvalid =
    enteredValues.email !== "" && !enteredValues.email.includes("@");

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  function handleInputChange(identifier, value) {
    setEenteredValues((pervValues) => ({
      ...pervValues,
      [identifier]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            // onChange={handleEmailChange}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please Enter a Valid Email Address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
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
