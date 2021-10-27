import React from "react";
import { useParams } from 'react-router-dom';
import { PostCards } from "../../Components/PostCards";

export const PostCardsPage = () =>{

    const {pokemonName, pokemonImage} = useParams();
    
    return(
        <PostCards pokemonName={pokemonName} pokemonImage={`${pokemonImage}`}/>
    );
}