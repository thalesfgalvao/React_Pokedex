import React from 'react';
import { useState } from 'react';
import './App.css';
import api from './services/api'



const App = () => {
  const [pokemon, setPokemon] = useState('');

  const handleClick = async () => {
    try{
      const response = await api.get(`/pokemon/${pokemon}`);
      console.log(response.data);
    }catch(error){
      console.log(error.message);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
       <div className="container">
        <h1>Welcome to Pokedex!</h1>
        <div className="form-group">
          <input
            onChange={(e) => setPokemon(e.target.value.toLowerCase())}
            placeholder="Type a pokemon"/>
          <button type="submit" onClick={handleClick}>Search</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
