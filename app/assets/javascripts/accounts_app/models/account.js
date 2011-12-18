AccountsApp.Models.Account = Backbone.DeepModel.extend({
  
  initialize: function() {
    this.line_items = new AccountsApp.Collections.LineItems;

    if (this.id){
      this.line_items.url = '/line_items?account=' + this.id
    }

    this.line_items.reset(this.get('line_items'));
  },

  schema: {
    name: { type: 'Text' },
    description: { type: 'Text' },
    owner_id: { title: 'Owner',
      type: 'Select', 
      options: function(callback){
        callback(AccountsApp.users );
      }
    },
    group_id: { title: 'Group',
      type: 'Select',
      options: function(callback){
        callback(AccountsApp.groups)
      }
    },
// line_items: { type: 'List', 
  },

  urlRoot: '/accounts',

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


  getGroup: function() {
    if ( ! this.group ) 
    {
      var group_id = this.get('group_id');
      if (group_id ) {
        group = AccountsApp.groups.get(group_id);
        this.group = group;
      }
    }

    return this.group;
  },


 
});
