TasksApp.Views.TasksIndex = Support.CompositeView.extend({
  initialize: function() {
    _.bindAll(this, "render");
    this.collection.bind("add", this.render);
  },

  render: function () {
    this.renderTemplate();
    this.renderTasks();
    return this;
  },

  renderTemplate: function() {
    $(this.el).html(JST['tasks/index']({ tasks: this.collection }));
  },

  renderTasks: function() {
    var self = this;
    this.collection.each(function(task) {
      var row = new TasksApp.Views.TaskItem({ model: task });
      self.renderChild(row);
      self.$('tbody').append(row.el);
    });
  }
});
