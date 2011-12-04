GroupsApp.Routers.Groups = Backbone.Router.extend({
  initialize: function() {
    this.collection = GroupsApp.groups; // TODO eventually pass in
  },

  routes: {
    "":          "index",
    "new":       "newGroup",
    ":id":       "show"
  },

  index: function() {
    var view = new GroupsApp.Views.GroupsIndex({ collection: this.collection });
    $('#groups').html(view.render().el);
  },

  newGroup: function() {
    var view = new GroupsApp.Views.GroupsNew({ collection: this.collection });
    $('#groups').html(view.render().el);
  },

  show: function(groupId) {
    var group = this.collection.get(groupId);
    group.fetch({
      success: function() {
        var view = new GroupsApp.Views.GroupShow({ model: group });
        $('#groups').html(view.render().el);
      }
    });
  }
});
