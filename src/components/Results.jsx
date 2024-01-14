import { calculateInvestmentResults } from "../util/investment";

export default function Results({ userInput }) {
  return (
    <div id="result">
      Soon...
      {console.log(calculateInvestmentResults(userInput))}
    </div>
  );
}
