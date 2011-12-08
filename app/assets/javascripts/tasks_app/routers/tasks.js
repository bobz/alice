TasksApp.Routers.Tasks = Backbone.Router.extend({
  initialize: function() {
    this.collection = TasksApp.tasks; // TODO eventually pass in
  },

  routes: {
    "":          "index",
    "new":       "newTask",
    ":id":       "show"
  },

  index: function() {
    var view = new TasksApp.Views.TasksIndex({ collection: this.collection });
    this.swap(view);
  },

  newTask: function() {
    var view = new TasksApp.Views.TasksNew({ collection: this.collection });
    this.swap(view);
  },

  show: function(taskId) {
    var task = this.collection.get(taskId);
    var taskRouter = this;
    task.fetch({
      success: function() {
        var view = new TasksApp.Views.TaskShow({ model: task });
        taskRouter.swap(view);
      }
    });
  }
});
