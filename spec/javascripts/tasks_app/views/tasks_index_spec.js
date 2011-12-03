//= require application

describe("TasksApp.Views.TasksIndex", function() {
  it("renders a collection of tasks", function() {
    var tasksCollection = new TasksApp.Collections.Tasks();
    tasksCollection.reset([
      { title: "Wake up" },
      { title: "Brush your teeth" }
    ]);

    var view = new TasksApp.Views.TasksIndex({collection: tasksCollection});
    var $el = $(view.render().el);

    expect($el).toHaveText(/Wake up/);
    expect($el).toHaveText(/Brush your teeth/);
  });
});
