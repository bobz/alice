AccountsApp.Collections.LineItems = Backbone.Collection.extend({ 
  model: AccountsApp.Models.LineItem, 
  url: '/line_items'
});
