var GroupsApp = {
  current_user: undefined,
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(user, groups) {
    current_user = user;

    this.groups = new GroupsApp.Collections.Groups(groups);

    new GroupsApp.Routers.Groups();
    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
};
