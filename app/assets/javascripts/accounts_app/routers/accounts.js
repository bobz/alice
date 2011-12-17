AccountsApp.Routers.Accounts = Backbone.Router.extend({
  initialize: function() {
    this.collection = AccountsApp.accounts; // TODO eventually pass in
  },

  routes: {
    "":          "index",
    "new":       "newAccount",
    ":id":       "show"
  },

  index: function() {
    var view = new AccountsApp.Views.AccountsIndex({ collection: this.collection });
    $('#accounts').html(view.render().el);
  },

  newAccount: function() {
    var view = new AccountsApp.Views.AccountsNew({ collection: this.collection });
    $('#accounts').html(view.render().el);
  },

  show: function(accountId) {
    var account = this.collection.get(accountId);
    account.fetch({
      success: function() {
        var view = new AccountsApp.Views.AccountShow({ model: account });
        $('#accounts').html(view.render().el);
      }
    });
  }
});
