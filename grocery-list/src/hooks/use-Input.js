import { useState } from "react";

const useInput = (validateValid) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState("");

  const valueIsValid = validateValid(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};
export default useInput;
