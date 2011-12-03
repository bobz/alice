GroupsApp.Views.TasksIndex = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this, "render");
    this.collection.bind("add", this.render);
  },

  render: function () {
    this.renderTemplate();
    this.renderGroups();
    return this;
  },

  renderTemplate: function() {
    $(this.el).html(JST['groups/index']({ tasks: this.collection }));
  },

  renderGroups: function() {
    var self = this;
    this.collection.each(function(group) {
      var row = new GroupsApp.Views.TaskItem({ model: group });
      self.$('tbody').append(row.render().el);
    });
  }
});
