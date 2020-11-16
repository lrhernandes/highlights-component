import React from 'react';
import './styles.css';
import Details from '../DetailsCard';

export default function HighlightsCard({card}){
    //display the cards, including picture ands details
    return(
        <div className="highlights-card">
            <img title={`${card.name}`} alt={`${card.name}`} className="card-banner" src={card.img}/>
            <div className="detais-card">
                <Details card={card}/>
            </div>
        </div>
    )
}