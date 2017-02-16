import React, { Component } from 'react';
import { Courses } from '../../api/models.js';
import { Repeatable } from '../helpers/Helpers.jsx';
import { Helpers } from '../helpers/Helpers.jsx';

class Class extends Component {
  constructor(props) {
    super(props);
    this.data = {};
  }

  render() {

    let addToRefArray = (el,refName ) => {
      typeof this[refName] == 'undefined' ? this[refName] = []:'';
      if(el != null) {
        this[refName].push(el);
      }
    }

    return(
      <div>
        <div className="input-field col m6 s12">
          <input id="class" ref={(el) => {addToRefArray(el,'class')}} type="text" />
          <label htmlFor="class">Número da Turma</label>
        </div>

        <div className="input-field col m6 s12">
          <input id="room" ref={(el) => {addToRefArray(el,'room')}} type="text" />
          <label htmlFor="room">Sala(s)</label>
        </div>
      </div>
    );
  }
}

class SaveCourse extends Component {

  constructor(props) {
    super(props);
    this.data = {};
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(Helpers.getDataValues(this.data));
    // let self = this;
    // let query = Helpers.getRefValues(this.refs);
    // let query = Helpers.getRefValues(this.refs.classes.refs);
    // console.log(query);

    // Courses.insert({name: name}, function(e,id) {
    //   if(e) console.log(e);
    //   else console.log(id);
    //   self.refs.name.value = '';
    // });
  }

  refer() {
    console.log('data',this.data);
  }

  render() {
    console.log(this.refs);

    let addToRefArray = (el,refName) => {
      typeof this.data[refName] == 'undefined' ? this.data[refName] = []:'';
      if(el != null) {
        this.data[refName].push(el);
      }
    }

    return(
      <form className="row" onSubmit={this.handleSubmit.bind(this)}>


        <div className="input-field col m4 s12">
          <input id="code" type="text" ref={(el) => {this.data.code = el; }} />
          <label htmlFor="code">Código</label>
        </div>
        <div className="input-field col m4 s12">
          <input id="name" type="text" ref={(el) => {this.data.name = el; }} />
          <label htmlFor="name">Nome do Curso</label>
        </div>
        <div className="input-field col m4 s12">
          <input id="department" type="text" ref={(el) => {this.data.department = el; }} />
          <label htmlFor="department">Departamento</label>
        </div>

        <h2>Turmas</h2>
        <Repeatable>
          <Class ref={(el) => addToRefArray(el,'class')} />
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
