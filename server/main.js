import { Meteor } from 'meteor/meteor';
import { Courses, Groups } from '../imports/api/models.js';

// ============
// Publications
// ============

// Courses Publication
Meteor.publish('courses', () => (Courses.find({}) ));
Meteor.publish('groups', () => (Groups.find({}) ));
