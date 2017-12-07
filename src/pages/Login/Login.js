import React, {Component} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm.js';
import Logo from '../../assets/logo.png';
import Ball from '../../assets/pokeball_ball.png';
import './Login.css';
import {save} from '../../services/storage.js';
import {loginUser} from '../../services/user.js';
import {browserHistory} from 'react-router';


class Login extends Component {

  constructor(args) {
    super(args);
    this.state = {
      data: []
    };
    this.saveCredentials = this.saveCredentials.bind(this);
  }

  saveCredentials(emailAdd, passw) {
    

    loginUser(emailAdd, passw).then((response) => {
      
      this.setState({
        data: response.data
      });
      
      save('email', emailAdd);
      save('token', response.data.attributes['auth-token']);

      browserHistory.push('/pokemon');

    });

  }
 
  render() {
    return (
      <div className="login">
        <img src={Logo}/>
        <img src={Ball}/>
        <LoginForm login={this.saveCredentials}/>
      </div>
    );
  }
}

export default Login;
