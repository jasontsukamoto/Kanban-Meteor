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