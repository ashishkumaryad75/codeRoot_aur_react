import React, { useState } from "react";

const useInput = (defaultValue, validationFn) => {
  const [enteredValue, setEenteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(event, value) {
    setEenteredValue(event.target.value);

    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
};

export default useInput;
