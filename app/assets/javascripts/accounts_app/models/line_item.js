AccountsApp.Models.LineItem = Backbone.DeepModel.extend({
  
  initialize: function() {

  },

  schema: {
    short_desc: { title: 'Title', type: 'Text' },
    long_desc: { title: 'Description', type: 'Text' },
    owner_id: { title: 'Owner',
      type: 'Select', 
      options: function(callback){
        callback(AccountsApp.users );
      }
    },
    eff_date: { title: 'Effective Date', type: 'Date' }
  },

  urlRoot: '/line_items',

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

  toString: function() {
    return this.get('short_desc');
  }
 
});
