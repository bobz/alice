AccountsApp.Models.User = Backbone.Model.extend({
  initialize: function() {
    var email = this.get('email');
    this.setEmail(email);
  },

  urlRoot: '/users',

  setEmail: function(email) {
    this.email=email;
  },
  
  toString: function(){
    return this.email
  }

});
