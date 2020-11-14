import React from 'react';
import './styles.css';
import Location from '../LocationDetails';
import Attributes from '../AttributesDetails';

import heart from '../../img/heart.svg';

export default function DetailsCard(){
    const price = "900.000";
    const title = "casa em condomínio fechado";
    return(
        <div className="details-card">
            <button className="fav-btn"><img src={heart}/></button>
            <h1 className="description">{title}</h1>
            <div className="price"> 
                <div className="price-icon">R$</div>
                {price}
            </div>
            <Location/>
            <Attributes/>
        </div>
    )
}