import React, { Component } from 'react';

class CouseDetails extends Component {
  render() {
    return(
      <div className="course-details page">
        <h1 className="code">
          PSI2121
        </h1>
        <p className="name">
          Circuitos Elétricos I
        </p>

        <section className="classes">
          <div className="custom-card course-class">
            <p className="code card-title">Turma: 2017-01</p>
            
            <p className="list-title">Horários</p>
            <ul className="datetime">
              <li>Segunda, 09h20 até 11h00</li>
              <li>Quarta, 09h20 até 11h00</li>
            </ul>
            
            <p className="list-title">Sala(s)</p>
            <ul className="rooms">  
              <li>C1-01</li>
            </ul>
            
            <p className="list-title">Professor(es)</p>
            <ul className="teachers">
              <li>João da Silva</li>
              <li>João da Silva</li>
              <li>João da Silva</li>
            </ul>
          </div>

          <div className="custom-card course-class">
            <p className="code card-title">Turma: 2017-02</p>
            
            <p className="list-title">Horários</p>
            <ul className="datetime">
              <li>Segunda, 09h20 até 11h00</li>
              <li>Quarta, 09h20 até 11h00</li>
            </ul>
            
            <p className="list-title">Sala(s)</p>
            <ul className="rooms">  
              <li>C1-01</li>
            </ul>
            
            <p className="list-title">Professor(es)</p>
            <ul className="teachers">
              <li>João da Silva</li>
              <li>João da Silva</li>
              <li>João da Silva</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default CouseDetails;