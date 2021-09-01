
import React from 'react';
import SearchBar from './component/search-bar';
import PokemonCard from './component/pokemon-card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>

      <SearchBar />
    <div className="container">
      
      <div className="row">
        <PokemonCard titulo='Pikachu' img = 'https://i.redd.it/aupqdbnqkfo31.jpg'></PokemonCard>
        <PokemonCard titulo='Pikachu' img = 'https://i.redd.it/aupqdbnqkfo31.jpg'></PokemonCard>
        <PokemonCard titulo='Pikachu' img = 'https://i.redd.it/aupqdbnqkfo31.jpg'></PokemonCard>
        <PokemonCard titulo='Pikachu' img = 'https://i.redd.it/aupqdbnqkfo31.jpg'></PokemonCard>
        <PokemonCard titulo='Pikachu' img = 'https://i.redd.it/aupqdbnqkfo31.jpg'></PokemonCard>
        <PokemonCard titulo='Pikachu' img = 'https://i.redd.it/aupqdbnqkfo31.jpg'></PokemonCard>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
