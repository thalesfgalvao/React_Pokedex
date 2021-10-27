import React, { useState, useEffect } from 'react';
import { Balls } from '../Balls';
import api from '../../services/api';
import { capitalizeFirstLetter } from '../../utils/capitalizedFirstLetter';

export const PostCards = ({pokemonName, pokemonImage}) => {

    const [pokemon, setPokemon] = useState('');

    const fetchPokemon = async() =>{
        try{
            const response = await api.get(`/pokemon/${pokemonName}`);
            console.log(response.data);
            setPokemon(response.data);
        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchPokemon();
    },[]);

    return(
        <div className="App">
            <header className="App-header">
                <Balls/>
                <div className="PostCards">
                    <div className="cardBody">
                        <div className="pokemonTitle">
                            <h1>{capitalizeFirstLetter(`${pokemon.name}`)}</h1>
                        </div>
                        <div className="pokemonImage">
                            <img className="pokemonImage" src={pokemon.sprites.front_default} alt="Pokemon_Image"/>
                        </div>
                        <div className="bodyContent">
                            <p>ID {pokemon.id} Height: {pokemon.height}'</p>
                            <p>Weight: {pokemon.weight}kg Type: {pokemon.type}</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}