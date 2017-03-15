import React, { Component } from 'react';
import { DataList, Helpers, StateHandler } from '../helpers/Helpers.jsx';
import { cloneDeep } from 'lodash';
import { withRouter } from  'react-router';
import { Groups } from '../../api/models.js';

class SaveExtensionGroup extends Component {

  constructor(props) {
    super(props);
    this.initialFormData = {
      name: '',
      description: '',
      email: '',
      site: '',
      social_networks: {
        facebook: '',
        twitter: '',
        instagram: '',
        youtube: ''
      },
      phones: [],
      address: ''
    };

    this.state = {
      form_data: cloneDeep(this.initialFormData)
    };

  }

  componentDidMount() {
    if(typeof this.props.group !== 'undefined') {
      this.setState({
        form_data: this.props.group
      }, () => {console.log(this.state)});
    }
  }

  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.group !== 'undefined') {
      this.setState({
        form_data: nextProps.group
      }, () => {console.log(this.state)});
    }
  }

  handleClick() {
    console.log(this.props.group);
    let self = this;
    let query = this.state.form_data;
    let _id = (typeof query._id !== 'undefined' ? query._id: '');
    delete query._id;
    console.log('form_data',this.state.form_data);
    console.log('query',query);

    if(typeof this.props.group == 'undefined') {
      Groups.insert(query, function(e, id) {
        if(e) console.log(e);
        else {
          self.props.router.push('/group-details/'+id);
        }
      });
    } else {
      Groups.update({_id: _id}, {$set: query}, function(e, success) {
        if(e) console.log(e);
        else {
          console.log('updated!');
          self.props.router.push('/group-details/'+_id);
        }
      });
    }
  }

  render() {

    let stateHandler = new StateHandler(this);

    return(
      <div className="page">

        {/* Name */}
        <div className="input-field">
          <input required id="name" value={this.state.form_data.name} onChange={(e) => stateHandler.set('name', e.target.value)} type="text" />
          <label className={this.props.group ? 'active':''} htmlFor="name">Nome do Grupo</label>
        </div>

        {/* Description */}
        <div className="input-field">
          <textarea required id="description" className="materialize-textarea" value={this.state.form_data.description} onChange={(e) => stateHandler.set('description', e.target.value)}></textarea>
          <label className={this.props.group ? 'active':''} htmlFor="description">Desrição</label>
        </div>

        {/* Email */}
        <div className="input-field">
          <input required id="email" value={this.state.form_data.email} onChange={(e) => stateHandler.set('email', e.target.value)} type="email" />
          <label className={this.props.group ? 'active':''} htmlFor="name">Email</label>
        </div>



        {/* Site */}
        <div className="input-field">
          <input id="site" value={this.state.form_data.site} onChange={(e) => stateHandler.set('site', e.target.value)} type="text" />
          <label className={this.props.group ? 'active':''} htmlFor="name">Site</label>
        </div>

        {/* Address */}
        <div className="input-field">
          <textarea required id="address" className="materialize-textarea" value={this.state.form_data.address} onChange={(e) => stateHandler.set('address', e.target.value)}></textarea>
          <label className={this.props.group ? 'active':''} htmlFor="address">Endereço</label>
        </div>

        {/* Phones */}
        <div className="custom-card">
          <h4 className="card-title">Telefones</h4>
          <DataList placeholder="Telefone(s)" data={this.state.form_data.phones} stateHandler={stateHandler} statePath='phones' />
        </div>

        {/* Social Networks */}
        <div className="custom-card">
          <h4 className="card-title">Redes Sociais</h4>

          {/* Facebook */}
          <div className="input-field">
            <input id="facebook" value={this.state.form_data.social_networks.facebook} onChange={(e) => stateHandler.set('social_networks.facebook', e.target.value)} type="text" />
            <label className={this.props.group ? 'active':''} htmlFor="facebook">Facebook</label>
          </div>

          {/* Twitter */}
          <div className="input-field">
            <input id="twitter" value={this.state.form_data.social_networks.twitter} onChange={(e) => stateHandler.set('social_networks.twitter', e.target.value)} type="text" />
            <label className={this.props.group ? 'active':''} htmlFor="twitter">Twitter</label>
          </div>

          {/* Instagram */}
          <div className="input-field">
            <input id="instagram" value={this.state.form_data.social_networks.instagram} onChange={(e) => stateHandler.set('social_networks.instagram', e.target.value)} type="text" />
            <label className={this.props.group ? 'active':''} htmlFor="instagram">Instagram</label>
          </div>

          {/* Youtube */}
          <div className="input-field">
            <input id="youtube" value={this.state.form_data.social_networks.youtube} onChange={(e) => stateHandler.set('social_networks.youtube', e.target.value)} type="text" />
            <label className={this.props.group ? 'active':''} htmlFor="youtube">Youtube</label>
          </div>
        </div>

        <br/>

        <button onClick={() => this.handleClick()} className="btn primary full waves-effect waves-light">{this.props.group ? 'Salvar Alterações':'Cadastrar Grupo'}</button>


      </div>
    );
  }
}

export default withRouter(SaveExtensionGroup);
