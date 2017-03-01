import React, { Component } from 'react';
import { Helpers } from '../helpers/Helpers.jsx';

class Test extends Component {

  constructor(props) {
    super(props);
    this.status = {
      data: []
    }
  }

  showStatus() {
    console.log(this.status);
  }

  render() {
    return(
      <div>
        <input type="text" name="i1" onChange={Helpers.handleStatus.bind(this,1)}/>
        <button onClick={this.showStatus.bind(this)}>Show Status</button>
      </div>
    );
  }
}

export default Test;
