import React from 'react';
import './styles.css';
import banner from '../../img/img.jpg';
import Details from '../DetailsCard';

export default function HighlightsCard(){
    return(
        <div className="highlights-card">
            <img className="card-banner" src={banner}/>
            <div className="detais-card">
                <Details/>
            </div>
        </div>
    )
}