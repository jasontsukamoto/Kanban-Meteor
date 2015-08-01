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

Template.registerForm.created = function() {

};

Template.registerForm.rendered = function() {

};

Template.registerForm.destroyed = function() {

};

Template.registerForm.helpers({

});

Template.registerForm.events({
  'submit form' : function(event) {
    event.preventDefault();
    console.log('clicked');
    var email = $('#email').val();
    var password = $('#password').val();
    console.log('email',email);
    console.log('password',password);
    Accounts.createUser({
      email : email,
      password : password
    });
  }
});
