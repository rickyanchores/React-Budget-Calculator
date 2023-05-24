import React from "react";

const Results = ({ totSalary }) => {
  return (
    <div className="Results">
      <h3>Monthly Income</h3>
      <div className="expenses">
        <ul>
          <li>housing</li>
          <li>transportation</li>
          <li>extra</li>
        </ul>
        <h3>Monthly Expenses</h3>
      </div>
      <h3>Total: {totSalary}</h3>
    </div>
  );
};

export default Results;
