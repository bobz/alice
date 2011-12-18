AccountsApp.Views.AccountItem = Backbone.View.extend({
  tagName: "tr",

  initialize: function() {
    _.bindAll(this, "render");
  },

  render: function () {
    $(this.el).html(JST['accounts/item']({ account: this.model }));
    this.renderFormContents();
    return this;
  },

  renderFormContents: function() {
    this.$('.account-name').text(this.model.escape('name'));

    this.$('.account-members').text("");
    var self = this;
    this.model.getGroup().users.each( function(user) {
      self.$('.account-members').append(user.escape('email') + "\t");
    });

    var action_li = document.createElement('li');
    this.$('.account-actions').append(action_li);
    
    var items_link = document.createElement('a');
    $(items_link).text("More");
    $(items_link).attr("href", this.lineItemsUrl());
    this.$(action_li).append( items_link );
    
    if (this.model.getOwner().id == AccountsApp.current_user.id)
    {
      var action_li = document.createElement('li');
      this.$('.account-actions').append(action_li);

      var edit_link = document.createElement('a');
      $(edit_link).text("Edit");
      $(edit_link).attr("href", this.accountUrl());
      this.$(action_li).append( edit_link );
    }  
  },

  lineItemsUrl: function() {
    return "#" + this.model.get('id') + '/items';
  },

  accountUrl: function() {
    return "#" + this.model.get('id');
  },

  update: function() {
    var complete = this.$('input').prop('checked');
    this.model.save({ complete: complete });
  }
});
