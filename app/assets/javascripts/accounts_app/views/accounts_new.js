AccountsApp.Views.AccountsNew = Backbone.View.extend({
  tagName: 'form',
  id: 'new-account',

  events: {
    "submit": "save",
    "click a.leave": "leave"
  },

  initialize: function() {
    _.bindAll(this, "render", "saved");
    this.newAccount();
  },

  newAccount: function() {
    this.model = new AccountsApp.Models.Account();
    this_users = new AccountsApp.Collections.Users();
    this_users.add( AccountsApp.current_user );
    this.model.schema.owner_id.options = this_users; 
    this.form = new Backbone.Form({ model: this.model, data: { name: 'New Account' } });
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
    var flash = "Created account: " + this.model.escape('name');

    this.collection.add(this.model);
    this.newAccount();
    this.render();
    this.renderFlash(flash);
  },

  leave: function() {
    this.unbind();
    this.remove();
  }
});
