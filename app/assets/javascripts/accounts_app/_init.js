var AccountsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(current_user, groups, users, accounts) {
    this.current_user = this.users.get(current_user.id);

    this.users = new AccountsApp.Collections.Users(users);
    this.accounts = new AccountsApp.Collections.Accounts(accounts);
    this.groups = new AccountsApp.Collections.Groups(groups);

    new AccountsApp.Routers.Accounts();
    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
};
