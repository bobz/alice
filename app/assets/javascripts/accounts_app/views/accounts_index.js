AccountsApp.Views.AccountsIndex = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this, "render");
    this.collection.bind("add", this.render);
  },

  render: function () {
    this.renderTemplate();
    this.renderAccounts();
    return this;
  },

  renderTemplate: function() {
    $(this.el).html(JST['accounts/index']({ accounts: this.collection }));
  },

  renderAccounts: function() {
    var self = this;
    this.collection.each(function(account) {
      var row = new AccountsApp.Views.AccountItem({ model: account });
      self.$('tbody').append(row.render().el);
    });
  }
});
