import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Courses } from '../../api/models.js';
import SaveCourse from '../components/SaveCourse.jsx';

export default SaveCourseContainer = createContainer((props) => {

  let handle = Meteor.subscribe("courses");
  let course_id = props.params.courseId;

  return {
    loading: !handle.ready(),
    course: Courses.findOne({_id: course_id})
  };
}, SaveCourse);
