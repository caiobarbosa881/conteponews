import React from "react";
import './Button.css';


const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
 children, 
}) => {
    return (    
        <button className="btn checkButtonStyle blue">{children}</button>
    )
}