import React, {Component} from 'react';
import './LoginForm.css';
import '../../Buttons.css';


class LoginForm extends Component {

  render() {
    return (
      <div className="login">
        
        <input className="login__input" type="text" placeholder="Email" ref={(input) => {
          this.email = input;
        }} />
        <input className="login__input" type="password" placeholder="Password" ref={(input) => {
          this.password = input;
        }} />
        <br /><br /><button className="button" onClick={() => this.props.login(this.email.value, this.password.value)} >LOGIN</button>
      </div>
    );

  }
}

export default LoginForm;
