import React, { useState } from "react";
import NumberInput from "./Numberinputs";
import Select from "react-select";
import Result from "./Result";


const CalculatorForm = (props) =>{
    const [SelectedOptionState, setSelectedOptionState] = useState({
        selectedOption: {
            value: '--Vyber operacie--',
            label: '--Vyber operacie--',
        }
    })
    const [resultState,setResultState]= useState(null)

    const options = [
        {value: 'ADD', label: 'Sčitanie'},
        {value: 'SUBSTRAT', label:'Odčitanie'},
        {value: 'MULTIPLY', label:'Nasobenie'},
        {value: 'DIVIDE', label:'Delenie'}
    ];
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleChange = (selectedOptiopnState) => {
        setSelectedOptionState({SelectedOptionState});
    };

    let calculate = () => {
        const {c, y } = props;
        switch(SelectedOptionState.SelectedOptionState.value){
            case 'ADD':
                return parseFloat(x) + parseFloat(y);
            case 'SUBSTRACT':
                return parseFloat(x) + parseFloat(y);
            case 'MULTIPLY':
               return parseFloat(x) + parseFloat(y);
            case 'DIVIDE':
              return parseFloat(x) + parseFloat(y);
            default:
                return null;
        }
    }

    return(
        <div>
            <from className="CalculatorForm" onSubmit={handleSubmit}>
                <NumberInput
                onChange = {props.xOnChange}
                name="x"
                label="Prvé číslo:"
                value = {props.x}
                />
                <NumberInput
                onChange = {props.xOCa}
                name="y" 
                label="Druhe číslo" 
                value={props.y} 
                />
                <Select
                onChange={handleChange}
                value={SelectedOptionState.value}
                options={options}
                />
                <input type="submit" value="Spočítajte"/>
            </from>
            <Result x={resultState} />
        </div>
    )
}

export default CalculatorForm;

