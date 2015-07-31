Template.toDo.created = function() {

};

Template.toDo.rendered = function() {

};

Template.toDo.destroyed = function() {

};

Template.toDo.helpers({

});

Template.toDo.events({
 'click .delete' : function(evt, templ) {
    evt.preventDefault();
    TasksCollection.remove(this._id);
  },

  'click .workingOnIt' : function(evt, templ) {
    evt.preventDefault();
    TasksCollection.update({ _id : this._id }, {
      $set : { status : 'inProgress' }
    });
  }
});