import React, { Component } from 'react';
import GroupDetails from './GroupDetails.jsx';
import { Link } from 'react-router';

class ListGroups extends Component {

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
  let groups = this.props.groups;

    return(
      <div className="page">

        <div className="input-field">
          <label htmlFor="searchTerm"><i className="fa fa-search"></i></label>
          <input id="searchTerm" type="text" onChange={(ev) => this.handleChange(ev)} />
        </div>

        <ul className="collection groups-list">

          {groups.map((group,i) => {
            const regEx = new RegExp(this.state.searchTerm, 'g');
              if(this.state.searchTerm == null || regEx.test(group.name) || regEx.test(group.description)) {

              return(
                <Link to={"/group-details/"+group._id} key={i}>
                  <li className="collection-item">
                    <div className="stacked row">
                      <div className="col s10">
                        <span className="title">{group.name}</span>
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

export default ListGroups;
