Template.profileEdit.events({
  'submit form': function(evt, templ) {
    evt.preventDefault();
    Meteor.users.update({ _id : Meteor.userId() },
      { $set : { "emails" : [{address : evt.target.username.value}] } })

  }
});

Template.profileEdit.helpers({
  username: function() {
    return Meteor.user().emails[0].address;
  }
});
