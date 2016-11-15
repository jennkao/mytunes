// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function() {
      this.render();
    }, this);
    this.collection.on('pop', function() {
      this.render();
    }, this);
  },
  render: function() {
    this.$el.empty();
    this.collection.forEach(this.renderSongQueueEntry, this);
  },
  renderSongQueueEntry: function(song) {
    var songQueueEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songQueueEntryView.render());
  }

});
