import React, { Component } from 'react';
import FlashMessage from './FlashMessage.jsx';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeFlashMessage: false
    }
  }

  handleSendMessage(ev) {
    ev.preventDefault();
    let name = this.refs.name.value;
    let from_email = this.refs.email.value;
    let message = this.refs.message.value;
    let email_message = message+'\n\n'+name+'\n'+from_email;

    Meteor.call('sendEmail',
            'bvodola@gmail.com',
            from_email,
            'Contato Poli App',
            email_message, (e) => {
              if(e) console.log(e);
              else {
                console.log('Mensagem Enviada.');
                console.log(this.refs);
                this.refs.name.value='';
                this.refs.email.value='';
                this.refs.message.value='';

                this.setState({activeFlashMessage: true}, () => {
                  setTimeout(() => {
                    this.setState({activeFlashMessage: false});
                  }, 2000);
                });
              }
            });
  }

  render() {

    return(
      <div className="page">
        <FlashMessage active={this.state.activeFlashMessage} message="Mensagem Enviada!" />
        <div className="input-field">
          <input id="contact_name" type="text" ref="name"/>
          <label htmlFor="contact_name">Nome</label>
        </div>

        <div className="input-field">
          <input id="contact_email" type="text" ref="email"/>
          <label htmlFor="contact_email">E-mail</label>
        </div>

        <div className="input-field">
          <textarea id="contact_message" className="materialize-textarea" ref="message"></textarea>
          <label htmlFor="contact_message">Mensagem</label>
        </div>

        <button onClick={(ev) => this.handleSendMessage(ev)} className="btn primary full waves-effect waves-light">Enviar Mensagem</button>
      </div>
    );
  }
}

export default Contact;
