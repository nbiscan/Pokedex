import React from 'react';
import Header from '../../components/Header/Header.js';

export default class AuthorizedContainer extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
