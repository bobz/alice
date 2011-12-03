describe("TasksApp.Collections.Attachments", function() {
  it("contains instances of TasksApp.Models.Attachment", function() {
    var collection = new TasksApp.Collections.Attachments();
    expect(collection.model).toEqual(TasksApp.Models.Attachment);
  });

  it("is persisted at /tasks", function() {
    var collection = new TasksApp.Collections.Attachments();
    expect(collection.url).toEqual("/attachments");
  });
});

