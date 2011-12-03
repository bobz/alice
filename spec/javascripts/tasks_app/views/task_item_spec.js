//= require application

describe("TasksApp.Views.TaskItem", function() {
  var task, view;

  beforeEach(function() {
    task = new TasksApp.Models.Task({ title: "Wake up", id: 7 });
    view = new TasksApp.Views.TaskItem({ model: task });
  });

  it("renders an individual task", function() {
    $el = $(view.render().el);
    expect($el).toHaveText(/Wake up/);
  });

  it("links to the task detail view", function() {
    $el = $(view.render().el);
    expect($el).toContain('a[href="#tasks/' + task.get('id') + '"]');
  });

  it("checks the checkbox for completed tasks", function() {
    task.set({ complete: true });
    $el = $(view.render().el);
    expect($el.find("input[type=checkbox]")).toBeChecked();
  });

  it("unchecks the checkbox for incomplete tasks", function() {
    task.set({ complete: false });
    $el = $(view.render().el);
    expect($el.find("input[type=checkbox]")).not.toBeChecked();
  });
});

