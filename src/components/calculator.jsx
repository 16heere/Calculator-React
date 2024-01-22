import React, {useState} from "react";
import Button from "./Button";

function Calculator() {

    const [display, setDisplay] = useState("");

    function handleClick(e) {
        return setDisplay(prevDisplay => {
            return (
                prevDisplay + e.target.innerHTML
        );
        })
    }

    function evaluateDisplay() {
        let total;
        try {
            total = eval(display);
            
        } catch (error) {
            total = "Error";
        }
        
        return setDisplay(total);
    }

    function clearDisplay(){
        setDisplay("");
    }
    return (
        <div className="calculator">
            <h1><span>{display}</span></h1>
            <div className="btn-grid">
                <Button handleClick={handleClick} class="operator-btn" name="+"/>
                <Button handleClick={handleClick} class="btn" name="7"/>
                <Button handleClick={handleClick} class="btn" name="8"/>
                <Button handleClick={handleClick} class="btn" name="9"/>
                <Button handleClick={handleClick} class="operator-btn" name="-"/>
                <Button handleClick={handleClick} class="btn" name="4"/>
                <Button handleClick={handleClick} class="btn" name="5"/>
                <Button handleClick={handleClick} class="btn" name="6"/>
                <Button handleClick={handleClick} class="operator-btn" name="*"/>
                <Button handleClick={handleClick} class="btn" name="1"/>
                <Button handleClick={handleClick} class="btn" name="2"/>
                <Button handleClick={handleClick} class="btn" name="3"/>
                <Button handleClick={handleClick} class="operator-btn" name="/"/>
                <Button handleClick={handleClick} class="btn" name="0"/>
                <Button handleClick={handleClick} class="btn" name="."/>
                <Button handleClick={evaluateDisplay} class="btn" name="="/>
                <Button handleClick={clearDisplay} class="operator-btn" name="C"/>
            </div>
            
        </div>
    );
}

export default Calculator;