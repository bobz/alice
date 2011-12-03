TasksApp.Collections.Attachments = Backbone.Collection.extend({ 
  model: TasksApp.Models.Attachment, 
  url: '/attachments'
});

