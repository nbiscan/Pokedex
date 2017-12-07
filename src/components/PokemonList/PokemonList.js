import React from 'react';
import PokemonItem from '../PokemonItem/PokemonItem.js';
import './PokemonList.css';

const PokemonList = ({pokemons}) => (
  <div className="pokemon-list__container">
    {
      pokemons.map((pokemon) => <PokemonItem pokemon={pokemon} />)
    }
  </div>
);

export default PokemonList;
