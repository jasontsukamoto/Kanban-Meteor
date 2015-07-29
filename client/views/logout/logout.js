Template.logout.events({
  'click a': function() {
    console.log('logged out');
    Meteor.logout();
  }
});