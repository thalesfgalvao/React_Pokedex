import React from "react";
import { useParams } from 'react-router-dom';
import { PostCards } from "../../components/PostCards";

export const PostCardsPage = () =>{

    const {pokemonName, pokemonImage} = useParams();
    
    return(
        <PostCards pokemonName={pokemonName} pokemonImage={`${pokemonImage}`}/>
    );
}