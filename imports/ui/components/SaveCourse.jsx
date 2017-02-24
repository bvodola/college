import React, { Component } from 'react';
import { Courses } from '../../api/models.js';
import { DataList, Helpers } from '../helpers/Helpers.jsx';


class SaveCourseClasses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current_class: {
        rooms: [],
        teachers: []
      },

      form_data: []
    }
  }

  handleRoomState(method, data, callback) {
    if(method == 'add') {
      let rooms = this.state.current_class.rooms;
      this.setState(
        (prevState) => {
          prevState.current_class.rooms.push(data);
          return prevState;
        }, function() {
          console.log('SaveCourse.jsx', this.state.current_class.rooms);
          if(typeof cb === 'function') {
            callback();
          }
        }
      );

		if(typeof this.state[this.property] === 'undefined') {
			this.setState({
				[this.property]: {}
    }
  }


  handleClick() {
    let refValues = Helpers.getRefValues(this.refs);
    console.log('refValues',refValues);

    let form_data = this.state.current_class;
    console.log('form_data',form_data);

    form_data = Helpers.merge(refValues,this.state.current_class);
    console.log('form_data MERGED',form_data);

    this.setState((prevState) => ({form_data: prevState.form_data.concat(form_data)}), function() {
      console.log('state.form_data',this.state.form_data);
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
        {this.state.form_data.map((v,i,a) => (
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

          {this.state.form_data.length > 0 ? this.renderClassesList() : 'Nenhuma Turma Cadastrada'}

          <div className="save-course-classes">
            <div className="input-field">
              <input id="code" type="text" ref="code" />
              <label htmlFor="code">Número da Turma</label>
            </div>

            <DataList ref="rooms" placeholder="Sala" data={this.state.current_class.rooms} handleState={this.handleRoomState.bind(this)} />


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
      <div className="page">

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
