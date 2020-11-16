import React from 'react';
import './styles.css';
import Location from '../LocationDetails';
import Attributes from '../AttributesDetails';
import heart from '../../img/heart.svg';

export default function DetailsCard({card}){
    //display the details section for each card. It includes name, price, location and attributes
    return(
        <div className="details-card">
            <input type="checkbox" className="fav-check" id={`${card.id}`}/>
            <label className="fav-btn" name="Adicionar aos favoritos" htmlFor={`${card.id}`}><img alt="Add to favourite icon" src={heart}/></label>
            <h1 className="description">{card.name}</h1>
            <div className="price">R${card.price}</div>
            <Location card={card}/>
            <Attributes card={card}/>
        </div>
    )
}