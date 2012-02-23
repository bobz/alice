GroupsApp.Views.GroupShow = Backbone.View.extend({
  tagName: 'form',
  id: 'show-group',

  events: {
    "submit": "save",
    "click a.leave": "leave"
  },

  initialize: function() {
    _.bindAll(this, "render", "saved");
    this.model.bind("change", this.render);
  },

  render: function () {
    this.renderTemplate();
    this.renderGroup();
    return this;
  },

  renderTemplate: function() {
    $(this.el).html(JST['groups/show']());
  },

  renderGroup: function() {
    this.form = new Backbone.Form({ model: this.model });
    this.$('#group-form').append(this.form.render().el);
    this.$('ul').append(JST['shared/form_buttons']());
    return this;
  },

  save: function(event) {
    this.form.commit();
    this.model.save({}, { success: this.saved });
    return false;
  },

  renderFlash: function(flashText) {
    $(this.el).prepend(JST['shared/flash']({ flashText: flashText, type: 'success' }));
  },

  saved: function() {
    var flash = "Created account: " + this.model.escape('name');

    this.render();
    this.renderFlash(flash);
  },
  
  leave: function() {
    this.unbind();
    this.remove();
  }

});

