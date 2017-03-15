import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Groups } from '../../api/models.js';
import SaveExtensionGroup from '../components/SaveExtensionGroup.jsx';

export default SaveGroupContainer = createContainer((props) => {

  let handle = Meteor.subscribe("groups");
  let group_id = props.params.groupId;

  return {
    loading: !handle.ready(),
    group: Groups.findOne({_id: group_id})
  };
}, SaveExtensionGroup);
