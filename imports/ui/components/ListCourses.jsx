import React, { Component } from 'react';
import CourseDetails from './CourseDetails.jsx';
import { Link } from 'react-router';

class ListCourses extends Component {

  render() {
    return(
      <div className="page">
        <ul className="collection courses-list">
          
          <Link to="/course-details">
            <li className="collection-item">
              <div className="stacked row">
                <div className="col s10">
                  <span className="title">PSI2121</span>
                  <p>Circuitos Elétricos I</p>
                </div>
                <div className="col s2">
                  <span className="secondary-content"><i className="fa fa-chevron-right"></i></span>
                </div>
              </div>
            </li>
          </Link>

          <Link to="/course-details">
            <li className="collection-item">
              <div className="stacked row">
                <div className="col s10">
                  <span className="title">PSI2121</span>
                  <p>Circuitos Elétricos I</p>
                </div>
                <div className="col s2">
                  <span className="secondary-content"><i className="fa fa-chevron-right"></i></span>
                </div>
              </div>
            </li>
          </Link>

          <Link to="/course-details">
            <li className="collection-item">
              <div className="stacked row">
                <div className="col s10">
                  <span className="title">PSI2121</span>
                  <p>Circuitos Elétricos I</p>
                </div>
                <div className="col s2">
                  <span className="secondary-content"><i className="fa fa-chevron-right"></i></span>
                </div>
              </div>
            </li>
          </Link>


          
        </ul>
      </div>
    );
  }
}

export default ListCourses;