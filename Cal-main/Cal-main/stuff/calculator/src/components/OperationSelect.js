import React, {Component} from "react";

export default class OperationSelect extends Component {
    render() {
        return(
            <label htmlFor="operation">
                Operace:
                <select id="operation" name="operation" required value="">
                    <option value="">Vyber si ne</option>
                    <option value="add">Sčítanie</option>
                </select>
            </label>
        );
    }
}