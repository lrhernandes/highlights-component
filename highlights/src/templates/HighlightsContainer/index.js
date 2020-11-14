import React from 'react';
import './styles.css';
import Cards from '../HighlightsCard'

export default function HighlightsContainer(){
    return(
        <div className="highlights-container">
            <h1 className="highlights-section-title">Imóveis em <strong>Destaque</strong></h1>
            <p className="highlights-section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend enim eget scelerisque hendrerit. Suspendisse dictum finibus quam. Sed molestie faucibus nunc.</p>
            <div className="highlight-grid">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
    )
}