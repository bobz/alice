describe("TasksApp.Collections.Tasks", function() {
  it("contains instances of TasksApp.Models.Task", function() {
    var collection = new TasksApp.Collections.Tasks();
    expect(collection.model).toEqual(TasksApp.Models.Task);
  });

  it("is persisted at /tasks", function() {
    var collection = new TasksApp.Collections.Tasks();
    expect(collection.url).toEqual("/tasks");
  });
});
