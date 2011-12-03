GroupsApp.Routers.Tasks = Backbone.Router.extend({
  initialize: function() {
    this.collection = GroupsApp.groups; // TODO eventually pass in
  },

  routes: {
    "":          "index",
    "new":       "newGroup",
    "groups/:id": "show"
  },

  index: function() {
    var view = new GroupsApp.Views.TasksIndex({ collection: this.collection });
    $('#groups').html(view.render().el);
  },

  newGroup: function() {
    var view = new GroupsApp.Views.TasksNew({ collection: this.collection });
    $('#groups').html(view.render().el);
  },

  show: function(groupId) {
    var group = this.collection.get(taskId);
    group.fetch({
      success: function() {
        var view = new GroupsApp.Views.TaskShow({ model: group });
        $('#groups').html(view.render().el);
      }
    });
  }
});
