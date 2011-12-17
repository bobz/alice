AccountsApp.Models.Group = Backbone.DeepModel.extend({
  
  initialize: function() {

    var users = new AccountsApp.Collections.Users;

    if (this.id)
    {
      users.url = '/groups/' + this.id + '/users'
    }

    users.reset(_.map(this.get('users'), function(n) { return AccountsApp.users.get(n.id) }));
    this.users = users;

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

  getOwner: function() {
    if ( ! this.owner ) 
    {
      var owner_id = this.get('owner_id');
      if (owner_id ) {
        owner = AccountsApp.users.get(owner_id);
        this.owner = owner;
      }
    }

    return this.owner;
  },

  toString: function(){
    return this.get('name')
  }
 
});
