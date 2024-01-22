import React from "react";

function Button(props) {
    return(
        <button onClick={props.handleClick} className = {props.class}>{props.name}</button>
    );
}

export default Button;