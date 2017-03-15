import React , {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Loading from './layouts/LoadingLayout.jsx';
import MainLayout from './layouts/MainLayout.jsx';

import HomeContainer from './containers/HomeContainer.jsx';
import ListCoursesContainer from './containers/ListCoursesContainer.jsx';
import CourseDetailsContainer from './containers/CourseDetailsContainer.jsx';
import SaveCourseContainer from './containers/SaveCourseContainer.jsx';
import SaveGroupContainer from './containers/SaveGroupContainer.jsx';
import GroupDetailsContainer from './containers/GroupDetailsContainer.jsx';
import ListGroupsContainer from './containers/ListGroupsContainer.jsx';

import SaveTeacher from './components/SaveTeacher.jsx';
import SaveCourse from './components/SaveCourse.jsx';
import ExtensionGroupsList from './components/ExtensionGroupsList.jsx';
import SaveExtensionGroup from './components/SaveExtensionGroup.jsx';
import EventsList from './components/EventsList.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx'

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
			<Route path='/list-groups' component={ListGroupsContainer} />
			<Route path='/course-details/:courseId' component={CourseDetailsContainer} />
			<Route path='/extension-groups' component={ExtensionGroupsList} />
			<Route path='/add-extension-group' component={SaveExtensionGroup} />
			<Route path='/edit-group/:groupId' component={SaveGroupContainer} />
			<Route path='/group-details/:groupId' component={GroupDetailsContainer} />
			<Route path='/events' component={EventsList} />
			<Route path='/contact' component={Contact} />
		</Route>
		<Route component={Login} path='admin-login'></Route>
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
