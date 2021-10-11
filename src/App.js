import React from 'react';
import { useState } from 'react';
import './App.css';
import MiniPostCards from './Components/MiniPostCards';
import api from './services/api';

const App = () => {
  const [typedPokemon, setTypedPokemon] = useState('');
  const [pokemon, setPokemon] = useState();
  const [error, setError] = useState('');



  const handleClick = async () => {
    try{
      const response = await api.get(`/pokemon/${typedPokemon}`);

      console.log(response.data);
      setPokemon(response.data);

    }catch(error){
      console.log(error.message);
      setError(error.message);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
       <div className="container">
        <h1>Welcome to Pokedex!</h1>
        <div className="form-group">
          <input
            onChange={(e) => setTypedPokemon(e.target.value.toLowerCase())}
            placeholder="Type a pokemon"/>
          <button type="submit" onClick={handleClick}>Search</button>
            {error && <p>{error}</p>}
          </div>
          {pokemon && <MiniPostCards pokemonName={pokemon.name} pokemonImage={pokemon.sprites.front_default}/>}
        </div>
      
      </header>
    </div>
  );
}

export default App;
