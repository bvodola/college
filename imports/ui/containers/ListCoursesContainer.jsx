import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Courses } from '../../api/models.js';
import ListCourses from '../components/ListCourses.jsx';

/*
- This function receives the information by server and pass to the presentation component
*/

export default ListCoursesContainer = createContainer(() => {

  var handle = Meteor.subscribe("courses");

  return {
    loading: !handle.ready(),
    courses: Courses.find({}).fetch()
  };
}, ListCourses);
