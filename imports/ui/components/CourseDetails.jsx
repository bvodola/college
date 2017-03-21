import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { Courses } from '../../api/models.js';

class CouseDetails extends Component {

  handleClick(ev, course_id) {
    ev.preventDefault();
    Courses.remove({_id: course_id}, (e) => {
      if(e) console.log('error', e);
      else this.props.router.push('/list-courses/');
    });

  }

  render() {
    let course = this.props.course;

    if(this.props.loading || typeof course === 'undefined') {
      return(<div className="page">Loading...</div>);
    }
    else {
      console.log('props', this.props);
      return(
        <div className="course-details page">
          {Meteor.user()?(
            <div>
              <Link to={'/edit-course/'+course._id}>
                <span className="btn primary btn-floating waves-effect waves-light right"><i className="fa fa-pencil"></i></span>
              </Link>
              <span onClick={(ev) => this.handleClick(ev, course._id)} className="btn red darken-4 btn-floating waves-effect waves-light right"><i className="fa fa-trash"></i></span>
            </div>
          )
          :''}
          <h1 className="code">
            {course.code}
          </h1>
          <p className="name">
            {course.title}
          </p>


          <section className="classes">

            {course.classes.map((c,i) => (
              <div className="custom-card course-class" key={i}>
                <p className="code card-title">Turma: {c.code}</p>
                <p className="list-title">Sala(s)</p>
                <ul className="rooms">
                  {c.rooms.map((room,j) => (
                    <li key={j}>{room}</li>
                  ))}
                </ul>

                <p className="list-title">Professor(es)</p>
                <ul className="teachers">
                  {c.teachers.map((teacher,k) => (
                    <li key={k}>{teacher}</li>
                  ))}
                </ul>
              </div>
            ))}

          </section>


        </div>
      );
    }

  }
}

export default withRouter(CouseDetails);
