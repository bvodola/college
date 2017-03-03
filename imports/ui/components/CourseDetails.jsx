import React, { Component } from 'react';
import { Link } from 'react-router';

class CouseDetails extends Component {
  render() {
    let course = this.props.course;

    if(this.props.loading) {
      console.log(this.props);
      return(<div>Loading...</div>);
    }
    else {
      console.log(this.props);
      return(
        <div className="course-details page">
          <Link to={'/edit-course/'+course._id}>
            <span className="btn primary btn-floating waves-effect waves-light right"><i className="fa fa-pencil"></i></span>
          </Link>
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

                <p className="list-title">Horários</p>
                <ul className="datetime">
                  <li>Segunda, 09h20 até 11h00</li>
                  <li>Quarta, 09h20 até 11h00</li>
                </ul>

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

export default CouseDetails;
