AccountsApp.Collections.Accounts = Backbone.Collection.extend({ 
  model: AccountsApp.Models.Account, 
  url: '/accounts'
});
