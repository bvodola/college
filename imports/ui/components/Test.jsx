import React, { Component } from 'react';
import { Helpers, StateHandler } from '../helpers/Helpers.jsx';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form_data: {
        name: {
          first: {
            name: ''
          },
          second: [
            {
              name: ''
            }
          ]
        }
      }
    };

  }

  render() {
    let stateHandler = new StateHandler(this);
    return(
      <div className="page">
        <input type="text" onChange={(e) => stateHandler.set('name.second[0].name', e.target.value)} />
        <input type="text" onChange={(e) => stateHandler.push('name.first.name', e.target.value)} />
      </div>
    );
  }
}

export default Test;
