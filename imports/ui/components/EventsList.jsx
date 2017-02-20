import React, { Component } from 'react';
import { Events } from '../../api/models.js';

class EventsList extends Component {

  handleSubmit(event) {
    // event.preventDefault();
    // let self = this;

    // let name = this.refs.name.value;
    // Teachers.insert({name: name}, function(e,id) {
    //   if(e) console.log(e);
    //   else console.log(id);
    //   self.refs.name.value = '';
    // });
  }

  render() {
    
    return(
      <div className="page">
        <h1>Events</h1>
      </div>
    );
  }
}

export default EventsList;
