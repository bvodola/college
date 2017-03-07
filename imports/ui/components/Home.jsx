import React, { Component } from 'react';
import { Link } from 'react-router';
class Home extends Component {

	componentDidMount() {
		$(".button-collapse").sideNav();
	}

	render() {
		return(
			<div className="home page">
				<div className="row menu">
					<div className="col s6 m3 menu-item">
						<Link to="/list-courses/">
							<span className="btn-floating btn-large btn waves-effect waves-light secondary">
								<i className="fa fa-book"></i>
							</span>
							<br/>
							Disciplinas
						</Link>
					</div>

					<div className="col s6 m3 menu-item">
						<Link to="/events/">
							<span className="btn-floating btn-large btn waves-effect waves-light secondary">
								<i className="fa fa-calendar"></i>
							</span>
							<br/>
							Eventos
						</Link>
					</div>
					<div className="col s6 m3 menu-item">
						<Link to="/extension-groups/">
							<span className="btn-floating btn-large btn waves-effect waves-light secondary">
								<i className="fa fa-group"></i>
							</span>
							<br/>
							Grupos de Extensão
						</Link>
					</div>

					<div className="col s6 m3 menu-item">
						<Link to="/contact/">
							<span className="btn-floating btn-large btn waves-effect waves-light secondary">
								<i className="fa fa-comment"></i>
							</span>
							<br/>
							Fale Conosco
						</Link>
					</div>
				</div>
		  </div>
		);
	}
}

export default Home;
