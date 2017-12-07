import React, {Component} from 'react';
import Logo from '../../assets/logo.png';
import './Header.css';
import {browserHistory} from 'react-router';

class Header extends Component {

  logout() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="header">
        <img className="header__logo" src={Logo} onClick={() => browserHistory.push('/pokemon')}/>
        <h1 className="header__pokedex" onClick={() => browserHistory.push('/pokemon')}>Pokedex</h1>
        <h1 className="header__logout" onClick={() => this.logout()}>Logout</h1>
      </div>
    );
  }
}

export default Header;
