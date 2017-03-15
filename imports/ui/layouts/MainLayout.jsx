import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class MainLayout extends Component {

	componentDidMount() {
		$(".button-collapse").sideNav({
			// edge: 'right', // Choose the horizontal origin
  		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  		// draggable: true // Choose whether you can drag to open on touch screens
		});
	}

	render() {

		let getPageTitle = function(url_pathname) {
			switch(url_pathname) {
				case 'save-teacher':
					return 'Adicionar Professor';
					break;
				case 'edit-course':
					return 'Editar Disciplina';
					break;
				case 'add-course':
					return 'Adicinar Disciplina';
					break;

				case 'list-courses':
					return 'Lista de Disciplinas';
					break;

				case 'course-details':
					return 'Detalhes do Curso'
					break;

				case 'events':
					return 'Eventos';
					break;

				case 'list-groups':
					return 'Grupos de Extensão';
					break;

				case 'group-details':
					return 'Detalhes do Grupo';
					break;

				case 'contact':
					return 'Fale Conosco';
					break;
				case 'add-extension-group':
					return 'Novo Grupo de Ext.';
					break;

				default:
					return 'Poli App';
			}
		}

		let page_title = getPageTitle(this.props.location.pathname.split('/')[1]);

		return (
			<div>

				 <nav className="custom-navbar">
				    <div className="nav-wrapper">
				    <span onClick={browserHistory.goBack} className="button-back-wrapper">
				      	<i className="fa fa-chevron-left buton-back"></i>
	      			</span>

				      <a href="#!" className="brand-logo">{page_title}</a>


				      <ul className="right hide-on-med-and-down">
								<li><Link to="/list-courses">Disciplinas</Link></li>
						    <li><Link to="/add-course">Adicionar Disciplina</Link></li>
						    <li><Link to="/extension-groups">Grupos de Extensão</Link></li>
						    <li><Link to="/events">Eventos</Link></li>
				      </ul>
				      <ul id="slide-out" className="side-nav right">
								<li className="nav-header"><Link to="/">Poli App</Link></li>
				      	<li><Link to="/list-courses">Disciplinas</Link></li>
						    <li><Link to="/add-course">Adicionar Disciplina</Link></li>
						    <li><Link to="/list-groups">Grupos de Extensão</Link></li>
								<li><Link to="/add-extension-group">Adicionar Grupo</Link></li>
						    <li><Link to="/events">Eventos</Link></li>
								<li><Link to="/contact">Contato</Link></li>
					  </ul>

					  <a href="#" data-activates="slide-out" className="button-collapse">
				      	<i className="fa fa-bars side-nav-icon"></i>
	      			</a>

				    </div>
				  </nav>

				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}

}

export default MainLayout;
