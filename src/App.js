import { useState } from "react";
import Form from "./Components/Form/Form";
import Results from "./Components/Results/Results";
import "./styles.css";

export default function App() {
  const [salary, setSalary] = useState("");
  const [extraSalary, setExtraSalary] = useState("");
  const [totSalary,setTotSalary] = useState("")

  return (
    <div className="App">
      <h2>React Budget Calculator</h2>
      <div className="main-container">
        <Results
          salary={salary}
          setSalary={setSalary}
          extraSalary={extraSalary}
          setExtraSalary={setExtraSalary}
          totSalary={totSalary}
          setTotSalary={setTotSalary}
        />
        <Form
          salary={salary}
          setSalary={setSalary}
          extraSalary={extraSalary}
          setExtraSalary={setExtraSalary}
          setTotSalary={setTotSalary}
        />
      </div>
      <p>Developed by Ricky A</p>
    </div>
  );
}
