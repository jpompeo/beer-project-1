var BeerView = Backbone.View.extend({
  className: 'beer',

  events: {
    'click .edit': 'toggleEditInput',
    'keypress input.beer-name': 'editOnEnter',
    'click .remove': 'destroyBeer'
  },

  template: Handlebars.compile($('#beer-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this
  },

  toggleEditInput: function(e) {
    var editInput = this.$('.beer-name');

    editInput.toggleClass('edit-mode');
  },

  editOnEnter: function(e) {
    var editInputVal = this.$('input').val();
    if (e.which === 13 && editInputVal) {
      this.model.set('name', editInputVal);
    }
  },

  destroyBeer: function() {
    this.model.destroy();
  }

});
