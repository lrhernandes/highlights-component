import React from 'react';
import './styles.css';
import banner2 from '../../img/img.jpg';
import Details from '../DetailsCard';

export default function HighlightsCard({card}){
    return(
        <div className="highlights-card">
            <img className="card-banner" src={banner2}/>
            <div className="detais-card">
                <Details card={card}/>
            </div>
        </div>
    )
}