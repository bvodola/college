import React, { Component } from 'react';
import { Courses } from '../../api/models.js';
import { DataList, Helpers } from '../helpers/Helpers.jsx';


class SaveCourseClasses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }

  handleClick() {
    form_data = Helpers.getRefValues(this.refs);
    this.setState((prevState) => ({
      value: prevState.value.concat(form_data)
    }), function() {
      console.log(this.state.value);
    });
  }

  handleDelete(index) {
    this.setState((prevState) => {
      prevState.value.splice(index,1);
      return { value: prevState.value }
    }, function() {
      console.log(this.state.value);

      this.refs.rooms.state.value = [];
      console.log(this.refs.rooms);
    })
  }

  renderClassesList() {
    return(
      <div className="course-classes-list">
        {this.state.value.map((v,i,a) => (
          <div key={i}>
            <p>{v.code}</p>
            <span onClick={() => this.handleDelete(i)}><i className="fa fa-trash"></i></span> 
          </div>
        ))}
      </div>
    )
  }

  render() {
    return(
        <div>
          
          {this.state.value.length > 0 ? this.renderClassesList() : 'Nenhuma Turma Cadastrada'}

          <div className="save-course-classes">
            <div className="input-field">
              <input id="code" type="text" ref="code" />
              <label htmlFor="code">Número da Turma</label>
            </div>

            <DataList ref="rooms" placeholder="Sala" stateValue />
            <DataList ref="teachers" placeholder="Professor" stateValue />

            <button onClick={() => this.handleClick()} className="btn-floating btn-large waves-effect waves-light green"><i className="fa fa-plus"></i></button>
          </div>

          
        </div>
    );
  }
}


class SaveCourse extends Component {

  constructor(props) {
    super(props);
  }

  showRefs() {
    console.log('refs', this.refs);
    console.log('refValues', Helpers.getRefValues(this.refs));
  }

  render() {
    return(
      <div>

        <h2>Nova Disciplina</h2>
        <div className="input-field">
          <input id="code" type="text" ref="code" />
          <label htmlFor="code">Código da Disciplina</label>
        </div>

        <div className="input-field">
          <input id="title" type="text" ref="title" />
          <label htmlFor="title">Tĩtulo da Disciplina</label>
        </div>

        <h3>Turmas</h3>
        <SaveCourseClasses ref="classes" stateValue />

        <button onClick={() => this.showRefs()}>Show Refs</button>
      </div>
    );
  }
}

export default SaveCourse;
