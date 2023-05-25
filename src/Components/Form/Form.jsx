import React from "react";

const Form = ({
  salary,
  setSalary,
  extraSalary,
  setExtraSalary,
  setTotSalary,
}) => {
  //Events
  const inputSalary = (e) => {
    console.log(e.target.value);
    setSalary(e.target.value);
  };
  const inputExtraSalary = (e) => {
    console.log(e.target.value);
    setExtraSalary(e.target.value);
  };
  // Button Event
  const next = (e) => {
    e.preventDefault(e);
    console.log("click");
    setSalary("");
    setExtraSalary("");
    setTotSalary(Number(salary) + Number(extraSalary));
  };

  return (
    <div className="Form">
      <h3>Monthly Income</h3>
      <p>monthly salary:</p>
      <input
        value={salary}
        type="text"
        placeholder="Monthly Salary"
        onChange={inputSalary}
      />
      <p>extra income:</p>
      <input
        value={extraSalary}
        type="text"
        placeholder="Extra Salary"
        onChange={inputExtraSalary}
      />
      <button className="btn" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default Form;
