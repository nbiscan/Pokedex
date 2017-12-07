import React, {Component} from 'react';
import {getPokemon} from '../../services/api';
import {read} from '../../services/storage';
import PokemonDetails from '../../pages/PokemonDetails/PokemonDetails';
import '../../Buttons.css';
import store from '../../services/store';
import {observer} from 'mobx-react';


class Details extends Component {

  constructor(args) {
    super(args);
    this.pokemon = {};
    this.state = {
      found: false,
      id: 0
    };
  }

  componentWillMount() {
    const {id} = this.props.params;
    this.setState({
      id
    });

    this.pokemon = store.pokemons.find((obj) => obj.id === id);

    if (this.pokemon) {
      this.setState({
        found: true
      });
    } else {
      getPokemon(id, read('token'), read('email'));
    }

    
  }

  showPage() {
    if (this.state.found) {
      return (<PokemonDetails pokemon={this.pokemon.attributes} id={this.state.id}/>);
    }
    return (<PokemonDetails pokemon={store.pokemon} id={this.state.id}/>);
    
  }

  render() {
    return (
      this.showPage()
    );
  }

}

export default observer(Details);
