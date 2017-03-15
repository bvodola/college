import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Groups } from '../../api/models.js';
import GroupDetails from '../components/GroupDetails.jsx';

/*
- This function receives the information by server and pass to the presentation component
*/

export default GroupDetailsContainer = createContainer((props) => {

  let handle = Meteor.subscribe("groups");
  let group_id = props.params.groupId;

  return {
    loading: !handle.ready(),
    group: Groups.findOne({_id: group_id})
  };
}, GroupDetails);
