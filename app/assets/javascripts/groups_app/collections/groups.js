GroupsApp.Collections.Groups = Backbone.Collection.extend({ 
  model: GroupsApp.Models.Group, 
  url: '/groups'
});
