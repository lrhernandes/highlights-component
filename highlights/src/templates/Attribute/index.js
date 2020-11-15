import React from 'react';
import './styles.css';

export default function Attribute({icon, value, dtails}){
    return(
        <div className="attributes-containers">
            <img className="attributes-icon" src={icon}/>
            <div className="attributes-text">
                <div>{value}</div>
                <div>{dtails}</div>
            </div>
        </div>
    )
}


