import React , {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Loading from './layouts/LoadingLayout.jsx';
import MainLayout from './layouts/MainLayout.jsx';

import HomeContainer from './containers/HomeContainer.jsx';
import ListCoursesContainer from './containers/ListCoursesContainer.jsx';
import CourseDetailsContainer from './containers/CourseDetailsContainer.jsx';
import SaveCourseContainer from './containers/SaveCourseContainer.jsx';

import SaveTeacher from './components/SaveTeacher.jsx';
import SaveCourse from './components/SaveCourse.jsx';
import ExtensionGroupsList from './components/ExtensionGroupsList.jsx';
import EventsList from './components/EventsList.jsx';
import Test from './components/Test.jsx';

// =================
// Routes Definition
// =================
const Routes = (
	<Route>
		<Route component={MainLayout}>
			<Route path='/' component={HomeContainer} />
			<Route path='/save-teacher' title='Adicionar Professor' component={SaveTeacher} />
			<Route path='/edit-course/:courseId' component={SaveCourseContainer} />
			<Route path='/add-course' component={SaveCourse} />
			<Route path='/list-courses' component={ListCoursesContainer} />
			<Route path='/course-details/:courseId' component={CourseDetailsContainer} />
			<Route path='/extension-groups' component={ExtensionGroupsList} />
			<Route path='/events' component={EventsList} />
			<Route path='/test' component={Test} />
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
