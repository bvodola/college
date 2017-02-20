import React , {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Loading from './layouts/LoadingLayout.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import SaveTeacher from './components/SaveTeacher.jsx';
import SaveCourse from './components/SaveCourse.jsx';
import ListCourses from './components/ListCourses.jsx';
import CourseDetails from './components/CourseDetails.jsx';
import ExtensionGroupsList from './components/ExtensionGroupsList.jsx';
import EventsList from './components/EventsList.jsx';

// =================
// Routes Definition
// =================
const Routes = (
	<Route>
		<Route component={MainLayout}>
			<Route path='/' component={HomeContainer} />
			<Route path='/save-teacher' title='Adicionar Professor' component={SaveTeacher} />
			<Route path='/save-course' component={SaveCourse} />
			<Route path='/list-courses' component={ListCourses} />
			<Route path='/course-details' component={CourseDetails} />
			<Route path='/extension-groups' component={ExtensionGroupsList} />
			<Route path='/events' component={EventsList} />
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
