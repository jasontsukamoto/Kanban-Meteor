Template.workingOnIt.events({
  'click .done' : function(evt, templ) {
    evt.preventDefault();
    TasksCollection.update({ _id : this._id }, {
      $set : { status : 'completed' }
    });
  }
});