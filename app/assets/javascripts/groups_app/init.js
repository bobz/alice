var GroupsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(groups) {
    this.groups = new GroupsApp.Collections.Groups(tasks);

    new GroupsApp.Routers.Groups();
    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
};
