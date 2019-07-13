import React from 'react';
import './styles.css';

const Card = ({heroItem})=> {
    // const { hero } = props; //Outra maneira 
    const imgurl = `${heroItem.thumbnail.path}.${heroItem.thumbnail.extension}`;
    return(
        <div className="card-hero">
            <img src={imgurl} alt="imagem" className="imagem"/>
            <p className="nome">{heroItem.name}</p>
        </div>
    );
}

export default Card;
