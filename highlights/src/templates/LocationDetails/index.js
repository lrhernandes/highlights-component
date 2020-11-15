import React from 'react';
import './styles.css';
import locationIcon from '../../img/pin.svg';

export default function LocationDetails({card}){
    return(
        <div className="location-details">
            <img className="location-icon" src={locationIcon}/>
            <div className="location-text">{card.city}, {card.neighbourhood}</div>
        </div>
    )
}