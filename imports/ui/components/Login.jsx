import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Login extends Component {

  handleClick() {
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    Meteor.loginWithPassword(email,password,(e) => {
      if(e) console.log(e);
      else this.props.router.push('/');
    });
  }

  handleAddUser() {
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    if(Meteor.users.find().count() < 1) {
      Accounts.createUser({ email, password },(e) => {
        if(e) console.log(e);
        else this.props.router.push('/');
      });
    }
  }

  render() {
    return(
      <div className="container">
        <p>Poli App Admin</p>
        <div className="page login">
          <div className="input-field">
            <input ref="email" id="email" type="text"/>
            <label htmlFor="email">E-mail</label>
          </div>

          <div className="input-field">
            <input ref="password" id="password" type="password"/>
            <label htmlFor="password">Senha</label>
          </div>

          <button
            onClick={() => this.handleClick()}
            className="btn primary full waves-effect waves-light">
              Fazer Login
          </button>

          {Meteor.users.find().count() < 1 ? (
          <button
            onClick={() => this.handleAddUser()}
            className="btn secondary full waves-effect waves-light">
              Criar Usuário
          </button>
          ):''}
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
