import React from 'react';
import './style.css';
import {capitalizeFirstLetter} from '../../Utils/capitalizeFirstLetter';

const MiniPostCards = ({pokemonName, pokemonImage}) => {
    
    return(
        <div className="miniPostCards">
            <div className="cardBody">
                <div className="bodyContent">
                    <div className="pokemonTitle">
                        <p>{capitalizeFirstLetter(pokemonName)}</p>
                    </div>
                    <div className="pokemonSprite">
                        <img src={pokemonImage} alt="Pokemon_Image"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiniPostCards;