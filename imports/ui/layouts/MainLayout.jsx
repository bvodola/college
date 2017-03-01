import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class MainLayout extends Component {

	componentDidMount() {
		$(".button-collapse").sideNav({
			// edge: 'right', // Choose the horizontal origin
  		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  		draggable: true // Choose whether you can drag to open on touch screens
		});
	}

	render() {

		let getPageTitle = function(url_pathname) {
			switch(url_pathname) {
				case '/save-teacher':
					return 'Adicionar Professor';
					break;

				case '/save-course':
					return 'Adicinar Disciplina';
					break;

				case '/list-courses':
					return 'Lista de Disciplinas';
					break;

				case '/course-details':
					return 'Detalhes do Curso'
					break;

				case '/events':
					return 'Eventos';
					break;

				case '/extension-groups':
					return 'Grupos de Extensão';
					break;

				default:
					return 'Poli App';
			}
		}

		let page_title = getPageTitle(this.props.location.pathname);

		return (
			<div>

				 <nav className="custom-navbar navbar-fixed">
				    <div className="nav-wrapper">
				    <span onClick={browserHistory.goBack} className="button-back-wrapper">
				      	<i className="fa fa-chevron-left buton-back"></i>
	      			</span>

				      <a href="#!" className="brand-logo">{page_title}</a>


				      <ul className="right hide-on-med-and-down">
				        <li><a href="sass.html">Sass</a></li>
				        <li><a href="badges.html">Components</a></li>
				        <li><a href="collapsible.html">Javascript</a></li>
				        <li><a href="mobile.html">Mobile</a></li>
				      </ul>
				      <ul id="slide-out" className="side-nav right">
				      	<li><Link to="/list-courses">Disciplinas</Link></li>
					    <li><Link to="/save-course">Adicionar Disciplina</Link></li>
					    <li><Link to="/extension-groups">Grupos de Extensão</Link></li>
					    <li><Link to="/events">Eventos</Link></li>

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
