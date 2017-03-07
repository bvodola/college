import React, { Component } from 'react';
import { Courses } from '../../api/models.js';
import { DataList, Helpers, StateHandler } from '../helpers/Helpers.jsx';
import { cloneDeep } from 'lodash';
import { withRouter } from  'react-router';

// =================
// SaveCourseClasses
// =================

class SaveCourseClasses extends Component {

  constructor(props) {
    super(props);
    this.initialFormData = {
      code: '',
      rooms: [],
      teachers: []
    }

    this.state = {
      show_form: false,
      form_data: cloneDeep(this.initialFormData)
    };

  }

  handleClick() {
    this.props.stateHandler.push('classes', this.state.form_data, () => {
      this.setState({
        form_data: cloneDeep(this.initialFormData)
      });
    });
  }

  handleToggleForm() {
    this.setState((prevState) => ({
      show_form: !prevState.show_form
    }));
  }



  render() {

    let stateHandler = new StateHandler(this);

    return(
        <div>

          <div className='save-course-classes custom-card'>
            <h4 onClick={() => this.handleToggleForm()} className="card-title">
              Adicionar Turma
              <span className="right"><i className={'fa fa-chevron-' + (this.state.show_form ? 'up':'down')}></i></span>
            </h4>

            <div className={(this.state.show_form ? '':'hidden')+' save-course-classes-form'}>
              <div className="input-field">
                <input id="class-code" type="text" value={this.state.form_data.code} onChange={(e) => stateHandler.set('code', e.target.value)} />
                <label htmlFor="class-code">Número da Turma</label>
              </div>

              <hr/>

              <p className="list-title">Sala(s)</p>
              <DataList ref="rooms" placeholder="Sala" data={this.state.form_data.rooms} stateHandler={stateHandler} statePath='rooms' />

              <hr/>

              <p className="list-title">Professor(es)</p>
              <DataList ref="teachers" placeholder="Professor" data={this.state.form_data.teachers} stateHandler={stateHandler} statePath='teachers' />

              <hr/>

              <button onClick={() => this.handleClick()} className="btn secondary full waves-effect waves-light">
                <i className="fa fa-plus-circle"></i> Adicionar Turma
              </button>
            </div>

          </div>


        </div>
    );
  }
}

// ==========
// SaveCourse
// ==========

class SaveCourse extends Component {

  constructor(props) {
    super(props);
    this.initialFormData = {
      title: '',
      code: '',
      classes: []
    };

    this.state = {
      form_data: cloneDeep(this.initialFormData)
    };

  }

  componentDidMount() {
    if(typeof this.props.course !== 'undefined') {
      this.setState({
        form_data: this.props.course
      }, () => {console.log(this.state)});
    }
  }

  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.course !== 'undefined') {
      this.setState({
        form_data: nextProps.course
      }, () => {console.log(this.state)});
    }
  }

  handleClick() {
    let self = this;
    let query = Helpers.merge(this.state.form_data, Helpers.getRefValues(this.refs));
    delete query._id;

    if(typeof this.props.course == 'undefined') {
      Courses.insert(query, function(e, id) {
        if(e) console.log(e);
        else {
          self.props.router.push('/course-details/'+id);
        }
      });
    } else {
      Courses.update({_id: this.props.course._id}, {$set: query}, function(e, success) {
        if(e) console.log(e);
        else {
          self.props.router.push('/course-details/'+self.props.course._id);
        }
      });
    }
  }

  renderClassesList() {
    let stateHandler = new StateHandler(this);

    return(
      <ul className="collection course-classes-list">
        {this.state.form_data.classes.map((v,i,a) => (
          <li className="collection-item" key={i}>
            Turma {v.code} <br/>
          Sala{v.rooms.length>1?'s':''}:&nbsp;
          {v.rooms.map((room,j,rooms) => (
            <span>
              {room}
              {j == rooms.length-1 ? '' : ', '}
            </span>
          ))}
          <br/>
          Professor{v.teachers.length>1?'es':''}:&nbsp;
          {v.teachers.map((teacher,j,teachers) => (
            <span>
              {teacher}
              {j == teachers.length-1 ? '' : ', '}
            </span>
          ))}
            <span className="secondary-content">
              <i onClick={() => stateHandler.remove('classes',i)} className="fa fa-trash"></i>
            </span>
          </li>
        ))}
      </ul>
    )
  }

  render() {

    let stateHandler = new StateHandler(this);


    return(
      <div className="page">
        <div className="input-field">
          <input id="code" value={this.state.form_data.code} onChange={(e) => stateHandler.set('code', e.target.value)} type="text" />
          <label className={this.props.course ? 'active':''} htmlFor="code">Código da Disciplina</label>
        </div>

        <div className="input-field">
          <input id="title" type="text" value={this.state.form_data.title} onChange={(e) => stateHandler.set('title', e.target.value)}/>
          <label className={this.props.course ? 'active':''} htmlFor="title">Tĩtulo da Disciplina</label>
        </div>

        <h3>Turmas</h3>
        {this.state.form_data.classes.length > 0 ? this.renderClassesList() : 'Nenhuma Turma Cadastrada'}
        <SaveCourseClasses ref="classes" stateHandler={stateHandler} />
        <br/>
        <button onClick={() => this.handleClick()} className="btn primary full waves-effect waves-light">{this.props.course ? 'Salvar Alterações':'Cadastrar Curso'}</button>
      </div>
    );
  }
}

export default withRouter(SaveCourse);
