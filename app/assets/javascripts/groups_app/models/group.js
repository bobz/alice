GroupsApp.Models.Group = Backbone.Model.extend({
  initialize: function() {
    if (this.has('owner')) {
      this.setOwner(new User(this.get('owner')));
    }
    var users = new Users.reset(this.get('users'));
    this.setUsers(users);

  },

  urlRoot: '/groups',

  setOwner: function(owner) {
    this.owner = owner;
  }

  setUsers: function(users) {
    this.users = users;
  }


});
