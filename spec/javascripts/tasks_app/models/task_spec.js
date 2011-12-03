//= require application

describe("TasksApp.Models.Tasks", function() {
  it("knows if it is complete", function() {
    var completeTask = new TasksApp.Models.Task({ complete: true });
    expect(completeTask.isComplete()).toBe(true);
  });

  it("knows if it is not complete", function() {
    var incompleteTask = new TasksApp.Models.Task({ complete: false });
    expect(incompleteTask.isComplete()).toBe(false);
  });
});

describe("TasksApp.Models.Tasks#initialize", function() {
  var attributes, task;

  beforeEach(function() {
    attributes = {"id":1,"title":"Sweet Task","attachments":[{"upload_url":"/uploads/1.jpg"},{"upload_url":"/uploads/2.jpg"}]};
    task = new TasksApp.Models.Task(attributes);
  });

  it("creates collections for nested attachments", function() {
    expect(task.attachments instanceof TasksApp.Collections.Attachments).toEqual(true);
    expect(task.attachments.size()).toEqual(2);
  });

  it("populates the collection with Attachment models", function() {
    expect(task.attachments.first() instanceof TasksApp.Models.Attachment).toEqual(true);
    expect(task.attachments.first().get('upload_url')).toEqual('/uploads/1.jpg');

    expect(task.attachments.last() instanceof TasksApp.Models.Attachment).toEqual(true);
    expect(task.attachments.last().get('upload_url')).toEqual('/uploads/2.jpg');
  });
});

describe("TasksApp.Models.Task when the attachments attribute changes", function() {
  it("re-parses the collection", function() {
    var task = new TasksApp.Models.Task({"attachments":[{"upload_url":"1.jpg"},{"upload_url":"2.jpg"}]});
    expect(task.attachments.size()).toEqual(2);

    task.set({"attachments":[{"upload_url":"1.jpg"}]});
    expect(task.attachments.size()).toEqual(1);
  });
});
