import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleUserInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        onUserInputChange={handleUserInputChange}
        userInput={userInput}
      />
      {inputIsValid && <Results userInput={userInput} />}
      {!inputIsValid && <p className="center">Please Enter Valid Data</p>}
    </>
  );
}

export default App;
