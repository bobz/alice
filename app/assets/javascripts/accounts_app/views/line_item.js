AccountsApp.Views.LineItem = Backbone.View.extend({
  tagName: "tr",

  initialize: function() {
    _.bindAll(this, "render");
  },

  render: function () {
    $(this.el).html(JST['accounts/line_item']({ line_item: this.model }));
    this.renderFormContents();
    return this;
  },

  renderFormContents: function() {
    if(this.model.get('eff-date')) {
      this.$('.li-eff-date').text(this.model.escape('eff_date'));
    }

    this.$('.li-name').text(this.model.escape('short_desc'));
    this.$('.li-desc').text(this.model.escape('long_desc'));

    if (this.model.getOwner().id == AccountsApp.current_user.id)
    {
      var edit_link = document.createElement('a');
      $(edit_link).text("Edit");
      $(edit_link).attr("href", this.lineItemUrl());
      this.$('.account-actions').append( edit_link );
    }  
  },

  lineItemUrl: function() {
    return "#" + this.model.get('account_id') + '/items/' + this.model.get('id');
  },

  update: function() {
    var complete = this.$('input').prop('checked');
    this.model.save({ complete: complete });
  }
});
