// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    // $.ajax({
    //   url: 'https://api.parse.com/1/classes/songs',
    //   method: 'GET',
    //   // dataType: 'application/json',
    //   // contentType: 'application/json',
    //   success: function(data) {
    //     console.log(data.results);
    //     this.add(data.results);
    //   }.bind(this)
    // });
  }

});