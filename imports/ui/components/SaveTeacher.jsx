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
      <form className="row" onSubmit={this.handleSubmit.bind(this)}>
        <div className="input-field col s6">
          <input id="name" type="text" ref="name" />
          <label htmlFor="name">Nome do Professor</label>
        </div>
        <div className="col s6">
          <button type="submit" className="waves-effect waves-light btn">Cadastrar Professor</button>
        </div>
      </form>
    );
  }
}

export default SaveTeacher;
