import React from 'react';
import api from '../../services/api';
import { useState } from 'react';
import { Balls } from '../../components/Balls';
import { MiniPostCards } from '../../components/MiniPostCards';
import { WelcomeText, InputSearch, ButtonSearch} from './styled.js';
import './style.css';

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
    <div className="App">
      <header className="App-header">
      <Balls/>
       <div className="container">
        <WelcomeText>Welcome to Pokedex!</WelcomeText>
        <div className="form-group">
          <InputSearch
            onChange={(e) => setTypedPokemon(e.target.value.toLowerCase())}
            placeholder="Type a pokemon"/>
          <ButtonSearch onClick={handleClick}>{isLoading ? 'Loading...' : 'Search'}</ButtonSearch>
            {error && <p>{error}</p>}
          </div>
          {pokemon && <MiniPostCards pokemonName={pokemon.name} pokemonImage={pokemon.sprites.front_default}/>}
        </div>
      </header>
    </div>
  );
}