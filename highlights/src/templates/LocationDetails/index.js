import React from 'react';
import './styles.css';
import locationIcon from '../../img/pin.svg';

export default function LocationDetails({card}){
    // display location details, as icon, city and neighbourhood
    return(
        <div className="location-details">
            <img alt="Location incon" className="location-icon" src={locationIcon}/>
            <div className="location-text">{card.city}, {card.neighbourhood}</div>
        </div>
    )
}