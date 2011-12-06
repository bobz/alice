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
    this.$('.group-name').text(this.model.escape('name'));

    this.$('.group-members').text("");
    var self = this;
    this.model.users.each( function(user) {
      self.$('.group-members').append(user.escape('email'));
    });

    if (this.model.owner.email == GroupApp.current_user)
    {
      var edit_link = document.createElement('a');
      $(edit_link).text("Edit");
      $(edit_link).attr("href", this.groupUrl());
      this.$('.group-actions').append( edit_link );
    }  
  },

  groupUrl: function() {
    return "#groups/" + this.model.get('id');
  },

  update: function() {
    var complete = this.$('input').prop('checked');
    this.model.save({ complete: complete });
  }
});
