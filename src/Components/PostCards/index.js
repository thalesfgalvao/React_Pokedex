import React, { useState } from 'react';
import { useEffect } from 'react';
import './style.css';
import { useParams } from 'react-router';
import api from '../../services/api';

export const PostCards = ({pokemonName}) => {
    
    const [pokemon, setPokemon] = useState(''); 

    useEffect(() => {    
        try{
            const response = api.get(`/pokemon/${pokemonName}`);
            console.log(response.data);
            setPokemon(response.data);
        }catch(error){
            console.log(error.message);
        }

    });

    const params = useParams();
    
    console.log(params);

    return(
        <div className="PostCards">
            <h1 pokemonName={`${pokemon.name}`}>{params}</h1>
        </div>
    )
}