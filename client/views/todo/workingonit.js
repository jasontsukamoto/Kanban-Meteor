Template.workingOnIt.created = function() {

};

Template.workingOnIt.rendered = function() {

};

Template.workingOnIt.destroyed = function() {

};

Template.workingOnIt.helpers({

});

Template.workingOnIt.events({
  'click .done' : function(evt, templ) {
    evt.preventDefault();
    TasksCollection.update({ _id : this._id }, {
      $set : { status : 'completed' }
    });
  },

  'click .delete' : function(evt, templ) {
    evt.preventDefault();
    TasksCollection.remove(this._id);
  },

  'click .backToQueue' : function(evt, templ) {
    evt.preventDefault();
    TasksCollection.update({ _id : this._id }, {
      $set : { status : 'default' }
    });
  }
});