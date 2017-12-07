import {observable} from 'mobx';

class Store {
  constructor() {
    this.pokemons = [];
    this.pokemon = {};
  }
}

export default observable.object(new Store());
