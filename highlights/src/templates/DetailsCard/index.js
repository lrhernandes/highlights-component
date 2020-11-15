import React from 'react';
import './styles.css';
import Location from '../LocationDetails';
import Attributes from '../AttributesDetails';

import heart from '../../img/heart.svg';

export default function DetailsCard({card}){
    return(
        <div className="details-card">
            <input type="checkbox" className="fav-check" id={`${card.id}`}/>
            <label className="fav-btn" name="Adicionar aos favoritos" for={`${card.id}`}><img src={heart}/></label>

            {/*<button title="Adicionar aos favoritos" className="fav-btn"><img src={heart}/></button>*/}
            <h1 className="description">{card.name}</h1>
            <div className="price">R${card.price}</div>
            <Location card={card}/>
            <Attributes card={card}/>
        </div>
    )
}