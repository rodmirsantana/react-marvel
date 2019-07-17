import React from 'react';
import './styles.css';

const Card = ({heroItem})=> {
    // const { hero } = props; //Outra maneira 
    const imgurl = `${heroItem.thumbnail.path}.${heroItem.thumbnail.extension}`;
    return(
        <div className="card">
            <div className="card-img">
                <img src={imgurl} alt="imagem" className="hero-img"/>
            </div>
            <div className="card-description">
                <h3>{heroItem.name}</h3>
                <p>{heroItem.description}</p>
            </div>
        </div>
    );
}

export default Card;
