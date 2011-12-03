GroupsApp.Models.Group = Backbone.Model.extend({
  initialize: function() {
    this.bind("change:attachments", this.parseAttachments);
    this.parseAttachments();
  },

  parseAttachments: function() {
    this.attachments = new GroupsApp.Collections.Attachments(this.get('attachments'));
  },

  schema: {
    title: { type: "Text" }
  },

  urlRoot: '/groups',

  isComplete: function() {
    return this.get('complete');
  }
});
