Template.postNewForm.created = function() {

};

Template.postNewForm.rendered = function() {
  $('#newTaskShow').click(function() {
    $('#postNewModal').foundation('reveal', 'open');
  });
};

Template.postNewForm.destroyed = function() {

};

Template.postNewForm.helpers({

});

Template.postNewForm.events({

  'click #save' : function(evt, templ) {
    evt.preventDefault();
    var title = templ.find('#title').value;
    var description = templ.find('#description').value;
    if (title === '' || description === '') {
      return;
    }

    //insert message into collection
    TasksCollection.insert({
      title : title,
      description : description,
      show : true,
      added : moment().format('MMM D YYYY'),
      status : 'default'
    });

    templ.find('#title').value = "";
    templ.find('#description').value = "";


    $('#postNewModal').foundation('reveal', 'close');
  },

  'keypress #description' : function(evt, templ) {
    if (evt.keyCode == 13) {
      $('#save').trigger('click');
    }

  }
});

