Template.completed.created = function() {

};

Template.completed.rendered = function() {

};

Template.completed.destroyed = function() {

};

Template.completed.helpers({

});

Template.completed.events({
  'click .delete' : function() {
    TasksCollection.remove(this._id);
  },

  'click .backToWorking' : function() {
    TasksCollection.update({ _id : this._id }, {
      $set : { status : 'inProgress' }
    });
  }
});