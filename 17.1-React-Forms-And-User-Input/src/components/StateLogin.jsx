import React, { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  const [enteredValues, setEenteredValues] = useState({
    email: "",
    password: "",
  });
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

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

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid = didEdit.password && !enteredValues.password.trim().length <6;;

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

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Eamil"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please Enter a Valid Email.'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password.'}
        />
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
