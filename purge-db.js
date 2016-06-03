'use strict';

var Parse = require('parse/node');

Parse.initialize('climatic');
Parse.serverURL = 'https://climatic.herokuapp.com/api';

var Post = Parse.Object.extend('Post');
var query = new Parse.Query(Post);
query.find({
  success: function(results) {
    console.log('found ' + results.length + ' results');
    Parse.Object.destroyAll(results, {
      success: function() {
        console.log('purged data successfully');
      },
      error: function(err) {
        console.warn('error purging data:', err);
      }
    });
  },

  error: function(err) {
    console.warn('error fetching data:', err);
  }
});
