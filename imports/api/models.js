import { Mongo } from 'meteor/mongo';
export const Teachers = new Mongo.Collection('teachers');
export const Courses = new Mongo.Collection('courses');
export const Groups = new Mongo.Collection('groups');
