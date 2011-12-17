AccountsApp.Views.AccountShow = Backbone.View.extend({
  tagName: 'form',
  id: 'show-account',

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
    this.renderAccount();
    return this;
  },

  renderTemplate: function() {
    $(this.el).html(JST['accounts/show']());
  },

  renderAccount: function() {
    this.form = new Backbone.Form({ model: this.model });
    this.$('#account-form').append(this.form.render().el);
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

