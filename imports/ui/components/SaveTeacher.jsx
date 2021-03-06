import React, { Component } from 'react';
import { Teachers } from '../../api/models.js';

class SaveTeacher extends Component {

  handleSubmit(event) {
    event.preventDefault();
    let self = this;

    let name = this.refs.name.value;
    Teachers.insert({name: name}, function(e,id) {
      if(e) console.log(e);
      else console.log(id);
      self.refs.name.value = '';
    });
  }

  render() {
    
    return(
      <div className="page">
        <form className="row" onSubmit={this.handleSubmit.bind(this)}>
          <h1>Cadastrar Professor</h1>
          <div className="input-field col s12 m6">
            <input id="name" type="text" ref="name" />
            <label htmlFor="name">Nome do Professor</label>
          </div>
          <div className="col s12 m6">
            <button type="submit" className="waves-effect waves-light btn">Cadastrar Professor</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SaveTeacher;
