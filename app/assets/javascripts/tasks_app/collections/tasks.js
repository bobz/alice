TasksApp.Collections.Tasks = Backbone.Collection.extend({ 
  model: TasksApp.Models.Task, 
  url: '/tasks'
});
