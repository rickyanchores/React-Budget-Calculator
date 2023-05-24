import React from "react";

const Form = ({ salary, setSalary, extraSalary, setExtraSalary }) => {
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
  };

  return (
    <div className="Form">
      <h3>Monthly Income</h3>
      <input
        value={salary}
        type="text"
        placeholder="Monthly Salary"
        onChange={inputSalary}
      />
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
