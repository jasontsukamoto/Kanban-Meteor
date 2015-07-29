Router.route('/', function() {
  this.render('login', {
    data: function () { }
  });
});

Router.route('/dashboard', function() {
  this.render('dashboard', {
    data: function () { }
  });
});

Router.route('/profile/edit', function() {
  this.render('profileEdit', {
    data: function() {}
  });
});

Router.route('/logout', function() {
  this.render('dashboard');
});