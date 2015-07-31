Template.logout.created = function() {

};

Template.logout.rendered = function() {

};

Template.logout.destroyed = function() {

};

Template.logout.helpers({

});

Template.logout.events({
 'click a': function() {
    Meteor.logout();
  }
});