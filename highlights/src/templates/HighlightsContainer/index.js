import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';
import Cards from '../HighlightsCard'

export default function HighlightsContainer(){
    const [cards, setCards] = useState([]);

    //get data from highlights/db.json using json server by typicode
    useEffect(() => {
        api.get('cards').then(({ data }) => {
            setCards(data);
        });
    }, []);
    
    return(
        //insert title and subtitle on page
        <div className="highlights-container">
            <h1 className="highlights-section-title">Imóveis em <strong>Destaque</strong></h1>
            <p className="highlights-section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend enim eget scelerisque hendrerit. Suspendisse dictum finibus quam. Sed molestie faucibus nunc.</p>
            <div className="highlight-grid">
                {cards.map((card) => {
                    // return list of cards taken from json server available at highlights/db.json
                    return (
                        <li key={`${card.id}`}>
                            <Cards card={card}/>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}