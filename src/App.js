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
       <input
        onChange={(e) => setPokemon(e.target.value.toLowerCase())}
        placeholder="Insert Pokemon name"/>
       <button type="submit" onClick={handleClick}>Search</button>
       </div>
      </header>
    </div>
  );
}

export default App;
