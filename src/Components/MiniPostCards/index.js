import React from 'react';
import { capitalizeFirstLetter } from '../../utils/capitalizedFirstLetter';
import { Link } from 'react-router-dom';
import { MiniPostCardsBody, PokemonTitle, PokemonSprite} from './styled.js';

export const MiniPostCards = ({pokemonName, pokemonImage}) => {
    return(
        <Link to={`/PostCardsPage/${pokemonName}`}>
            <MiniPostCardsBody>
                <PokemonTitle>
                    {capitalizeFirstLetter(pokemonName)}
                </PokemonTitle>
                <PokemonSprite src={pokemonImage}/>
            </MiniPostCardsBody>
        </Link>
    );
}