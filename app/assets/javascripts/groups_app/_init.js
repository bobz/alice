var GroupsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(current_user, groups, users) {
    this.current_user = new GroupsApp.Models.User(current_user);

    this.groups = new GroupsApp.Collections.Groups(groups);
    this.users = new GroupsApp.Collections.Users(users);

    new GroupsApp.Routers.Groups();
    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
};
