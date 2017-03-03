import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Courses } from '../../api/models.js';
import CourseDetails from '../components/CourseDetails.jsx';

/*
- This function receives the information by server and pass to the presentation component
*/

export default CourseDetailsContainer = createContainer((props) => {

  let handle = Meteor.subscribe("courses");
  let course_id = props.params.courseId;

  return {
    loading: !handle.ready(),
    course: Courses.findOne({_id: course_id})
  };
}, CourseDetails);
