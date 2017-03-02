import React, { Component } from 'react';
import { Helpers, StateHandler } from '../helpers/Helpers.jsx';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    let stateHandler = new StateHandler(this);
    return(
      <div className="page">
        <input type="text" onChange={(e) => stateHandler.set('name', e.target.value)} />
      </div>
    );
  }
}

export default Test;
