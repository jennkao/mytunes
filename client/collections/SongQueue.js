// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({
  model: SongModel,
  initialize: function() {
    this.on('add', function(song) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function(song) {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
    this.on('dequeue', function(song) {
      this.remove(this.at(0));
    }, this);
  },
  playFirst: function() {
    this.at(0).play();
  }
});


//difference between .trigger('ended') and ended()

//when you just use .trigger('ended'), your collection listener does not 
//receive the model that the event was triggered on in the listener callback

//when you use .ended() (which contains the .trigger('ended')) then your collection
//listener receives the model that the event was triggered on
//'songQueue.at(0).ended() --> this.trigger('ended, this) --> collection listener does receive the
//model the ended event fired on