import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Groups } from '../../api/models.js';
import ListGroups from '../components/ListGroups.jsx';

/*
- This function receives the information by server and pass to the presentation component
*/

export default ListGroupsContainer = createContainer(() => {

  var handle = Meteor.subscribe("groups");

  return {
    loading: !handle.ready(),
    groups: Groups.find({}).fetch()
  };
}, ListGroups);
