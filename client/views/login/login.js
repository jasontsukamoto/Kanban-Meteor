Template.login.created = function() {
  Accounts.onLogin(function() {
    console.log('logged in');
    Router.go('dashboard');
    // this.next();
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