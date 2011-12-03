var GroupsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(groups) {
    this.groups = new GroupsApp.Collections.Tasks(tasks);

    new GroupsApp.Routers.Tasks();
    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
};
