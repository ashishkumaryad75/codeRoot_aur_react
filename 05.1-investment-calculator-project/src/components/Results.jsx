import React from "react";
import { calculateInvestmentResults } from "../util/investment.js";

function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);

  console.log(resultsData);

  return (
    <>
      <h2>Results</h2>
    </>
  );
}

export default Results;
