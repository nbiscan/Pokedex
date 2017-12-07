import React, {Component} from 'react';
import './App.css';
import {read} from './services/storage';
import PokemonList from './components/PokemonList/PokemonList.js';
import {getPokemons} from './services/api';
import store from './services/store';
import {observer} from 'mobx-react';


class App extends Component {

  constructor(args) {
    super(args);
    this.state = {
      loading: false
    };
  }

  componentWillMount() {

    if (store.pokemons.length === 0) {

      this.setState({loading: true});

      getPokemons(read('token'), read('email')).then(() => {
        this.setState({
          loading: false
        });
      });

    }
  }

  

  render() {
    return (
      <div className="App">
        {
          this.state.loading ? <p>Loading ...</p> : null
        }
        {
          <PokemonList pokemons={store.pokemons} />
        }
      </div>
    );
  }
}

export default observer(App);
