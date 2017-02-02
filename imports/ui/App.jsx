import React , {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Loading from './layouts/LoadingLayout.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import SaveTeacher from './components/SaveTeacher.jsx';
import SaveCourse from './components/SaveCourse.jsx';

// =================
// Routes Definition
// =================
const Routes = (
	<Route>
		<Route component={MainLayout}>
			<Route path='/' component={HomeContainer} />
			<Route path='/save-teacher' component={SaveTeacher} />
			<Route path='/save-course' component={SaveCourse} />
		</Route>
	</Route>
);

// =============
// App Component
// =============
class App extends Component {
	render() {
		return (<Router history={browserHistory} routes={Routes} />);
	}
}

export default App;
export { Routes };
