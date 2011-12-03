GroupsApp.Views.GroupItem = Backbone.View.extend({
  tagName: "tr",

  events: {
    "change input": "update"
  },

  initialize: function() {
    _.bindAll(this, "render");
  },

  render: function () {
    $(this.el).html(JST['groups/item']({ task: this.model }));
    this.renderFormContents();
    return this;
  },

  renderFormContents: function() {
    this.$('label').attr("for", "group_completed_" + this.model.get('id'));
    this.$('label').text(this.model.escape('title'));

    this.$('input').attr("id", "group_completed_" + this.model.get('id'));
    this.$('input').prop("checked", this.model.isComplete());

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
