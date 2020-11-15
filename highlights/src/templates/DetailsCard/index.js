import React from 'react';
import './styles.css';
import Location from '../LocationDetails';
import Attributes from '../AttributesDetails';

import heart from '../../img/heart.svg';

export default function DetailsCard({card}){
    return(
        <div className="details-card">
            <button className="fav-btn"><img src={heart}/></button>
            <h1 className="description">{card.name}</h1>
            <div className="price">R${card.price}</div>
            <Location card={card}/>
            <Attributes card={card}/>
        </div>
    )
}