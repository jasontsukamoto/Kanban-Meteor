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

});