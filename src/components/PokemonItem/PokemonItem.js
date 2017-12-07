import React from 'react';
import './PokemonItem.css';
import ThumbsUp from '../../assets/thumb_up.png';
import ThumbsDown from '../../assets/thumb_down.png';
import ThumbsUpSelected from '../../assets/thumb_up_selected.png';
import ThumbsDownSelected from '../../assets/thumb_down_selected.png';
import {browserHistory} from 'react-router';

const PokemonItem = ({pokemon}) => (


  <div className="pokemon-item__container">
    <img className="pokemon-item__avatar" src={`https://pokedex.byinfinum.co/${pokemon.attributes['image-url']}`} onClick={() => browserHistory.push(`/pokemon/${pokemon.id}`)} />
    <h1 className="pokemon-item__title">{pokemon.attributes.name}</h1>
    {
      pokemon.attributes['total-vote-count'] > 0 ? (
        <div>
          <img src={ThumbsUpSelected} className="pokemon-item__thumbUp"/>
          <img src = {ThumbsDown} className="pokemon-item__thumbDown"/>
        </div>
      ) : null
    }
    {
      pokemon.attributes['total-vote-count'] < 0 ? (
        <div>
          <img src={ThumbsUp} className="pokemon-item__thumbUp"/>
          <img src = {ThumbsDownSelected} className="pokemon-item__thumbDown"/>
        </div>
      ) : null
    }
    {
      pokemon.attributes['total-vote-count'] === 0 ? (
        <div>
          <img src={ThumbsUp} className="pokemon-item__thumbUp"/>
          <img src = {ThumbsDown} className="pokemon-item__thumbDown"/>
        </div>
      ) : null
    }
   
    <h3 className="pokemon-item__description">{pokemon.attributes.description}</h3>
  </div>
);

export default PokemonItem;

