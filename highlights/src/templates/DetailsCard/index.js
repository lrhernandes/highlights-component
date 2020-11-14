import React from 'react';
import './styles.css';
import Location from '../LocationDetails';
import Attributes from '../AttributesDetails';

export default function DetailsCard(){
    return(
        <div className="details-card">
            <h1 className="description">CASA EM CONDOMÍNIO FECHADO</h1>
            <h2 className="price">900.000</h2>
            <Location/>
            <Attributes/>
        </div>
    )
}