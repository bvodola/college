import React, { Component } from 'react';
import { Courses } from '../../api/models.js';
import { Repeatable } from '../helpers/Helpers.jsx';

class SaveCourse extends Component {

  handleSubmit(event) {
    event.preventDefault();
    let self = this;

    Teachers.insert({name: name}, function(e,id) {
      if(e) console.log(e);
      else console.log(id);
      self.refs.name.value = '';
    });
  }

  refer() {
    console.log(this.refs);
  }

  render() {
    console.log(this.refs);
    return(
      <form className="row" onSubmit={this.handleSubmit.bind(this)}>


        <div className="input-field col m4 s12">
          <input id="code" type="text" ref="code" />
          <label htmlFor="code">Código</label>
        </div>
        <div className="input-field col m4 s12">
          <input id="name" type="text" ref="name" />
          <label htmlFor="name">Nome do Curso</label>
        </div>
        <div className="input-field col m4 s12">
          <input id="department" type="text" ref="department" />
          <label htmlFor="department">Departamento</label>
        </div>

        <h2>Turmas</h2>
        <Repeatable refName="test" defaultRef>
          <div className="input-field col m4 s12" >
            <input id="class" type="text" />
            <label htmlFor="class">Código da Turma</label>
          </div>
        </Repeatable>

        <div className="col s12 m12 l12">
          <button onClick={this.refer.bind(this)} className="waves-effect waves-light btn">Refs</button>
          <button type="submit" className="waves-effect waves-light btn">Cadastrar</button>
        </div>
      </form>
    );
  }
}

export default SaveCourse;
