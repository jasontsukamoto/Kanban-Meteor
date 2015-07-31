Template.tasks.created = function() {

};

Template.tasks.rendered = function() {
  dragula([document.querySelector('#left'), document.querySelector('#right'), document.querySelector('#center')]);
};

Template.tasks.destroyed = function() {

};

Template.tasks.helpers({
  queueList : function() {
    return TasksCollection.find({ status : 'default' });
  },

  inProgressList : function()
  {
    return TasksCollection.find({ status : 'inProgress' });
  },

  finishedList : function() {
    return TasksCollection.find({ status : 'completed' });
  }
});

