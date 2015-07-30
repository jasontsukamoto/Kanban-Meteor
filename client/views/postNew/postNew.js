Template.postNewForm.events({

  'click #save' : function(evt, templ) {
    evt.preventDefault();
    var title = templ.find('#title').value;
    var description = templ.find('#description').value;
    if (title === '') {
      return;
    }

    //insert message into collection
    TasksCollection.insert({
      title : title,
      description : description,
      show : true,
      added : Date.now(),
      status : 'default'
    });

    $('#postNewModal').foundation('reveal', 'close');
  }
});

