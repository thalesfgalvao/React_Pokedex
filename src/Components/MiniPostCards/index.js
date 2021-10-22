import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import {capitalizeFirstLetter} from '../../Utils/capitalizeFirstLetter';

const MiniPostCards = ({pokemonName, pokemonImage}) => {
  
    
    return(
        <Link to={`/PostCardsPage/${pokemonName}`}>
            <div className="miniPostCards">
                <div className="cardBody">
                    <div className="bodyContent">
                        <div className="pokemonTitle">
                            <p>{capitalizeFirstLetter(pokemonName)}</p>
                        </div>
                        <div className="pokemonSprite">
                            <img className="pokemonImage" src={pokemonImage} alt="Pokemon_Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default MiniPostCards;