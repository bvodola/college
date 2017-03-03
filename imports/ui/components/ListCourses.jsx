import React, { Component } from 'react';
import CourseDetails from './CourseDetails.jsx';
import { Link } from 'react-router';

class ListCourses extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: null
    }
  }

  handleChange(ev) {
    this.setState({
      searchTerm: ev.target.value
    });
  }

  render() {
  let courses = this.props.courses;

    return(
      <div className="page">
        <div className="input-field">
          <label htmlFor="searchTerm"><i className="fa fa-search"></i></label>
          <input id="searchTerm" type="text" onChange={(ev) => this.handleChange(ev)} />
        </div>
        <ul className="collection courses-list">

          {courses.map((course,i) => {
            const regEx = new RegExp(this.state.searchTerm, 'g');
              if(this.state.searchTerm == null || regEx.test(course.code) || regEx.test(course.title)) {

              return(
                <Link to={"/course-details/"+course._id} key={i}>
                  <li className="collection-item">
                    <div className="stacked row">
                      <div className="col s10">
                        <span className="title">{course.code}</span>
                        <p>{course.title}</p>
                      </div>
                      <div className="col s2">
                        <span className="secondary-content"><i className="fa fa-chevron-right"></i></span>
                      </div>
                    </div>
                  </li>
                </Link>
              );

            } else {
              return('');
            }
          }

          )}





        </ul>
      </div>
    );
  }
}

export default ListCourses;
