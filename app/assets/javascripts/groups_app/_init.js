var GroupsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(current_user, groups, users) {

    this.users = new GroupsApp.Collections.Users(users);

    this.current_user = this.users.get(current_user.id);

    this.groups = new GroupsApp.Collections.Groups(groups);

    new GroupsApp.Routers.Groups();
    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
};
