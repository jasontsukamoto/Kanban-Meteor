Template.login.created = function() {
  Accounts.onLogin(function() {
    Router.go('dashboard');
  });
};

Template.login.rendered = function() {

};

Template.login.destroyed = function() {

};

Template.login.helpers({

});

Template.login.events({
  'submit form' : function(event) {
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password);
  }
});

Template.register.created = function() {

};

Template.register.rendered = function() {

};

Template.register.destroyed = function() {

};

Template.register.helpers({

});

Template.register.events({
  'submit form' : function(event) {
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Accounts.createUser({
      email : email,
      password : password
    });
  }
});
