import { Meteor } from 'meteor/meteor';
import { Courses } from '../imports/api/models.js';

// ============
// Publications
// ============

// Courses Publication
Meteor.publish('courses', () => (Courses.find({}) ));
