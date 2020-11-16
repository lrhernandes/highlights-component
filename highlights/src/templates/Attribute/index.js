import React from 'react';
import './styles.css';

export default function Attribute({icon, value, dtails}){
    //place icon, value and notation for each attribute
    return(
        <div className="attributes-containers">
            <img alt="Attribute icon" className="attributes-icon" src={icon}/>
            <div className="attributes-text">
                <div>{value}</div>
                <div>{dtails}</div>
            </div>
        </div>
    )
}


