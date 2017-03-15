import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { Groups } from '../../api/models.js';

class GroupDetails extends Component {


  handleClick(ev, group_id) {
    ev.preventDefault();
    Groups.remove({_id: group_id}, (e) => {
      if(e) console.log('error', e);
      else this.props.router.push('/list-groups/');
    });

  }

  render() {
    let group = this.props.group;



    if(this.props.loading || typeof group === 'undefined') {
      return(<div className='page'>Loading...</div>);
    }
    else {
      return(
        <div className="group-details page">
          <Link to={'/edit-group/'+group._id}>
            <span className="btn primary btn-floating waves-effect waves-light right"><i className="fa fa-pencil"></i></span>
          </Link>
          <span onClick={(ev) => this.handleClick(ev, group._id)} className="btn red darken-4 btn-floating waves-effect waves-light right"><i className="fa fa-trash"></i></span>
          <h1 className="name">
            {group.name}
          </h1>
          <p className="description">
            {group.description}
          </p>
          <p className="address">
            {group.address}
          </p>

          <p className="email">
            {group.email}
          </p>
          <p className="site">
            <a target="_blank" href={group.site}>{group.site}</a>
          </p>
          <div className="custom-card">
            <h4 className="card-title">Telefones</h4>
            <ul className="phones">
              {group.phones.map((v,i,a) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
          <div className="custom-card">
            <h4 className="card-title">Redes Sociais</h4>
            <ul className="social-networks">
              <li className="facebook">
                <i className="fa fa-facebook-official"></i>
                <a target="_blank" href={group.social_networks.facebook}>{group.social_networks.facebook}</a>
              </li>
              <li className="twitter">
                <i className="fa fa-twitter"></i>
                <a target="_blank" href={group.social_networks.twitter}>{group.social_networks.twitter}</a>
              </li>
              <li className="instagram">
                <i className="fa fa-instagram"></i>
                <a target="_blank" href={group.social_networks.instagram}>{group.social_networks.instagram}</a>
              </li>
              <li className="youtube">
                <i className="fa fa-youtube"></i>
                <a target="_blank" href={group.social_networks.youtube}>{group.social_networks.youtube}</a>
              </li>
            </ul>
          </div>



        </div>
      );
    }

  }
}

export default withRouter(GroupDetails);
