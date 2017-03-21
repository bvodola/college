import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { ExternalLink } from '../helpers/Helpers.jsx';
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

      // Adding http:// prefix to social network links
      if(typeof group !== 'undefined' && typeof group.social_networks !== 'undefined') {
        for(var social_network in group.social_networks) {
          console.log(social_network);
          if(typeof group.social_networks[social_network] !== 'undefined' && group.social_networks[social_network].substr(0.7) !== 'http://' && group.social_networks[social_network].substr(0.8) !== 'https://') {
            group.social_networks[social_network] = 'http://' + group.social_networks[social_network];
          }
        }
      }

      // Adding http:// prefix to site link
      if(typeof group !== 'undefined' && typeof group.site !== 'undefined') {
        if(group.site.substr(0.7) !== 'http://' && group.site.substr(0.8) !== 'https://') {
          group.site = 'http://' + group.site;
        }
      }

      return(
        <div className="group-details page">
          {Meteor.user()?(
            <div>
              <Link to={'/edit-group/'+group._id}>
                <span className="btn primary btn-floating waves-effect waves-light right"><i className="fa fa-pencil"></i></span>
              </Link>
              <span onClick={(ev) => this.handleClick(ev, group._id)} className="btn red darken-4 btn-floating waves-effect waves-light right"><i className="fa fa-trash"></i></span>
            </div>
          )
          :''}
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
            <ExternalLink target="_blank" href={group.site}>{group.site}</ExternalLink>
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
                <ExternalLink href={group.social_networks.facebook}>{group.social_networks.facebook}</ExternalLink>
              </li>
              <li className="twitter">
                <i className="fa fa-twitter"></i>
                <ExternalLink href={group.social_networks.twitter}>{group.social_networks.twitter}</ExternalLink>
              </li>
              <li className="instagram">
                <i className="fa fa-instagram"></i>
                <ExternalLink href={group.social_networks.instagram}>{group.social_networks.instagram}</ExternalLink>
              </li>
              <li className="youtube">
                <i className="fa fa-youtube"></i>
                <ExternalLink href={group.social_networks.youtube}>{group.social_networks.youtube}</ExternalLink>
              </li>
            </ul>
          </div>



        </div>
      );
    }

  }
}

export default withRouter(GroupDetails);
