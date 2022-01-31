import React, { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import './App.css';

const App = () =>{
  const title = "React kalkulačka";
function App() {
  const [titleState] = useState('React kalkulačka');
  const[xstate, setXState] = useState(0);
  const[ystate, setYState] = useState(0);

  const inputXonchange = (event) =>{
    console.log(event.target.value);
    setXState(event.target.value);
  };
}

  return(
    <div className="App">
      <h1>{titleState}</h1>
      <CalculatorForm 
      xOnchange={inputXonchange}
      yOnchange={inputYonchange}
      x={xstate}
      y={ystate}
      />
    </div>
    );
}



export default App;
