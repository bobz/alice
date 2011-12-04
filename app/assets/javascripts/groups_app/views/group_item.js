GroupsApp.Views.GroupItem = Backbone.View.extend({
  tagName: "tr",

  initialize: function() {
    _.bindAll(this, "render");
  },

  render: function () {
    $(this.el).html(JST['groups/item']({ group: this.model }));
    this.renderFormContents();
    return this;
  },

  renderFormContents: function() {
    this.$('label').text(this.model.escape('name'));

    this.$('a').attr("href", this.groupUrl());
  },

  groupUrl: function() {
    return "#groups/" + this.model.get('id');
  },

  update: function() {
    var complete = this.$('input').prop('checked');
    this.model.save({ complete: complete });
  }
});
