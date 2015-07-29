Meteor.publish("tasks", function(){
  return TasksCollection.find();
});

Meteor.users.allow({
  'insert': function(userId, doc) {
    return true;
  },
  'update': function(userId, doc, fields, modifier) {
    return true;
  }
});