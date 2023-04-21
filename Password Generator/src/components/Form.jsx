import React, { useState } from "react";

//utility functions
import { generatePassword } from "../Utils/form.utils";

export default function Form() {

    const [hasNumber, setHasNumber] = useState(false);

    return <form className="password_form">
        <h2>Strong Password Generator</h2>
        <div className="password__inputs">
            <h4 className="password__text">jrhfkjhgkdkhjg</h4>
            <div className="flex">
                <label htmlFor="password-length">Password Length </label>
                <input 
                type="number"
                max={80} 
                min={5} 
                name="password-length" 
                style={{maxWidth: "8ch"}}
            />
            </div>
            <div className="flex">
                <label htmlFor="numbers">Include numbers ?</label>
                <input type="checkbox" name="numbers"/>           
             </div>
             <div className="flex">
                <label htmlFor="symbols">Include Symbols ?</label>
                <input type="checkbox" name="symbols"/>
             </div>
             <button className="btn">Generate</button>
        </div>
    </form>;
}