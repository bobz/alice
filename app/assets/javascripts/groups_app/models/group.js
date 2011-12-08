GroupsApp.Models.Group = Backbone.Model.extend({
  
  initialize: function() {
    var owner = new GroupsApp.Models.User(this.get('owner'));
    this.setOwner(owner);
    var users = new GroupsApp.Collections.Users;
    if (this.id)
    {
      users.url = '/groups/' + this.id + '/users'
    }
    users.reset(this.get('users'));
    this.setUsers(users);

  },

  schema: {
    name: { type: 'Text' },
    owner_id: { title: 'Owner',
      type: 'Select', 
      options: function(callback){
        callback(this.users );
      }
    }
  },

  urlRoot: '/groups',

  getOwner: function(){
    return GroupsApp.users.get(this.owner_id);
  }

  setUsers: function(users) {
    this.users = users;
  }
  
});
