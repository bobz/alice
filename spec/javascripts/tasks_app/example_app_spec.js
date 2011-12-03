describe("TasksApp", function(){
  it("has a namespace for Models", function() {
    expect(TasksApp.Models).toBeTruthy();
  });

  it("has a namespace for Collections", function() {
    expect(TasksApp.Collections).toBeTruthy();
  });

  it("has a namespace for Views", function() {
    expect(TasksApp.Views).toBeTruthy();
  });

  it("has a namespace for Routers", function() {
    expect(TasksApp.Routers).toBeTruthy();
  });

  describe("init()", function() {
    it("accepts task JSON and instantiates a collection from it", function() {
      var tasksJSON = [{"title":"thing to do"}, {"title":"another thing"}];
      TasksApp.init(tasksJSON);

      expect(TasksApp.tasks).not.toEqual(undefined);
      expect(TasksApp.tasks.length).toEqual(2);
      expect(TasksApp.tasks.models[0].get('title')).toEqual("thing to do");
      expect(TasksApp.tasks.models[1].get('title')).toEqual("another thing");
    });

    it("instantiates a Tasks router", function() {
      TasksApp.Routers.Tasks = sinon.spy();
      TasksApp.init();
      expect(TasksApp.Routers.Tasks).toHaveBeenCalled();
    });

    it("starts Backbone.history", function() {
      Backbone.history = { start: sinon.spy() };
      TasksApp.init();
      expect(Backbone.history.start).toHaveBeenCalled();
    });
  });
});
