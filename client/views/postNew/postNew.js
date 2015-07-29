Template.postNew.events({
  'click #newTaskShow' : function(evt, templ) {
    evt.preventDefault();
    var form = $('.newTaskForm');
    form.removeClass('hidden');
    form.addClass('show');
  },

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

    var form = $('.newTaskForm');
    form.addClass('hidden');
    form.removeClass('show');

  }
});