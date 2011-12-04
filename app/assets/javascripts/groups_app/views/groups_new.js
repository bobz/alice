GroupsApp.Views.GroupsNew = Backbone.View.extend({
  tagName: 'form',
  id: "new-group",

  events: {
    "submit": "save",
    "click a.leave": "leave"
  },

  initialize: function() {
    _.bindAll(this, "render", "saved");
    this.newGroup();
  },

  newGroup: function() {
    this.model = new GroupsApp.Models.Group();
    this.form = new Backbone.Form({ model: this.model });
  },

  render: function () {
    $(this.el).html(this.form.render().el);
    this.$('ul').append(JST['shared/form_buttons']());
    return this;
  },

  renderFlash: function(flashText) {
    $(this.el).prepend(JST['shared/flash']({ flashText: flashText, type: 'success' }));
  },

  save: function(event) {
    this.form.commit();
    this.model.save({}, { success: this.saved });
    return false;
  },

  saved: function() {
    var flash = "Created group: " + this.model.escape('title');

    this.collection.add(this.model);
    this.newGroup();
    this.render();
    this.renderFlash(flash);
  },

  leave: function() {
    this.unbind();
    this.remove();
  }
});