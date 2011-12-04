var TasksApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(tasks) {
    this.tasks = new TasksApp.Collections.Tasks(tasks);

    new TasksApp.Routers.Tasks();
    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
};
