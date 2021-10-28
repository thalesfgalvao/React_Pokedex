import React from 'react';
import api from '../../services/api';
import { useState } from 'react';
import { Balls } from '../../Components/Balls';
import { MiniPostCards } from '../../Components/MiniPostCards';
import * as S from './styled.js';

export const Home = () => {
    const [typedPokemon, setTypedPokemon] = useState('');
    const [pokemon, setPokemon] = useState();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try{
      const response = await api.get(`/pokemon/${typedPokemon}`);
          console.log(response.data);
          setPokemon(response.data);
          setIsLoading(false);
    }catch(error){
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }
  }

  return (
    <>
      <Balls/>
      <S.Wrapper>
        <S.WelcomeText>Welcome to Pokedex!</S.WelcomeText>
          <S.InputSearch
            onChange={(e) => setTypedPokemon(e.target.value.toLowerCase())}
            placeholder="Type a pokemon"/>
          <S.ButtonSearch isLoadingButton={isLoading} onClick={handleClick}>{isLoading ? 'Loading...' : 'Search'}</S.ButtonSearch>
            {error && <p>{error}</p>}
          {pokemon && <MiniPostCards pokemonName={pokemon.name} pokemonImage={pokemon.sprites.front_default}/>}
      </S.Wrapper>
    </>
  );
}