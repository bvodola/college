import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email'
import { check } from 'meteor/check'
import { Courses, Groups } from '../imports/api/models.js';

Meteor.startup(() => {
  process.env.MAIL_URL='smtp://bvodola_mail:qZwX1001@smtp.webfaction.com:465';
  // process.env.MONGO_URL='mongodb://poli_app:qZwX1001@ds133450.mlab.com:33450/poli_app';
});

// ============
// Publications
// ============

// Courses Publication
Meteor.publish('courses', () => (Courses.find({}) ));
Meteor.publish('groups', () => (Groups.find({}) ));

// ==============
// Server Methods
// ==============

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});
