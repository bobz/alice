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
    this.model.users.each( function(user) {
      self.$('.account-members').append(user.escape('email') + "\t");
    });

    if (this.model.getOwner().id == AccountsApp.current_user.id)
    {
      var edit_link = document.createElement('a');
      $(edit_link).text("Edit");
      $(edit_link).attr("href", this.accountUrl());
      this.$('.account-actions').append( edit_link );
    }  
  },

  accountUrl: function() {
    return "#accounts/" + this.model.get('id');
  },

  update: function() {
    var complete = this.$('input').prop('checked');
    this.model.save({ complete: complete });
  }
});
