import React from 'react';
import './styles.css';
import locationIcon from '../../img/pin.svg';

export default function LocationDetails(){
    return(
        <div className="location-details">
            <img className="location-icon" src={locationIcon}/>
            <div className="location-text">Capão da Canoa, Zona Nova</div>
        </div>
    )
}