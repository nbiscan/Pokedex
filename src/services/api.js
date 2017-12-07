import store from './store';
import {runInAction} from 'mobx';

export function getPokemons(token, email) {
  return fetch('https://pokedex.byinfinum.co/api/v1/pokemons', {
    method: 'GET',
    headers: {
      Authorization: `Token token=${token}, email=${email}`
    }
  }).then((res) => res.json())
    .then((response) => {
      runInAction(() => {
        store.pokemons = response.data;
      });
    });
}

export function getPokemon(id, token, email) {
  return fetch(`https://pokedex.byinfinum.co/api/v1/pokemons/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Token token=${token}, email=${email}`
    }
  }).then((res) => res.json())
    .then((response) => {
      runInAction(() => {
        store.pokemon = response.data.attributes;
      });
    });
}

