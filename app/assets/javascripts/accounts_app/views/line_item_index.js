AccountsApp.Views.LineItemIndex = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this, "render");
    this.model.line_items.bind("add", this.render);
  },

  render: function () {
    this.renderTemplate();
    this.renderAccount();
    this.renderLineItems();
    return this;
  },

  renderTemplate: function() {
    $(this.el).html(JST['accounts/line_item_index']({ accounts: this.collection }));
  },

  renderAccount: function() {
    this.$('#account-name').text(this.model.escape('name'));
  },

  renderLineItems: function() {
    var self = this;
    this.model.line_items.each(function(line_item) {
      var row = new AccountsApp.Views.LineItem({ model: line_item });
      self.$('tbody').append(row.render().el);
    });
  }
});
