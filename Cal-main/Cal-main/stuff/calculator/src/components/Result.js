import React from "react";

const Result = (props) => {
    const result = props.x;
    if(result || result == 0) 
        return<div className="Result">Vysledok je:{props.x}</div>
    else
        return <div>Nebol vypočitany</div>    
}

export default Result;

