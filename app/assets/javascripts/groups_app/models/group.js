GroupsApp.Models.Group = Backbone.Model.extend({
  
  initialize: function() {
    if (this.has('owner')) {
      var owner = new GroupsApp.Models.User(this.get('owner'));
      this.setOwner(owner);
    }
    var users = new GroupsApp.Collections.Users;
    users.reset(this.get('users'));
    this.setUsers(users);

  },

  schema: {
    name: { type: 'Text' },
    owner: { type: 'Select', options: ['Option 1', 'Option 2']}
  },

  urlRoot: '/groups',

  setOwner: function(owner) {
    this.owner = owner;
  },

  setUsers: function(users) {
    this.users = users;
  }


});
