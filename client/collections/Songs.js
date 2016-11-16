// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs',
  initialize: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      success: function(data) {
        this.add(data.results);
      }.bind(this)
    }); 
  }
});