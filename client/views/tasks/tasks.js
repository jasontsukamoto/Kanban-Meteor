Template.tasks.created = function() {

};

Template.tasks.rendered = function() {
  dragula([document.querySelector('#left'), document.querySelector('#right'), document.querySelector('#center')],
    { delay : 200, removeOnSpill : true })
    .on('drop', function(el, container, source) {
      var id = Blaze.getData(el)._id;
      var _status;
      switch (container.id) {
        case 'left':
          _status = 'default'
          break;
        case 'right':
          _status = 'inProgress'
          break;
        case 'center':
          _status = 'completed'
          break;
      }

      TasksCollection.update({ _id : id }, {
        $set : { status : _status }
      });
    });
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

Template.tasks.events({

});