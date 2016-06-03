'use strict';

var Parse = require('parse/node');

Parse.initialize('climatic');
Parse.serverURL = 'https://climatic.herokuapp.com/api';

var saveItem = function(item, idx) {
  var Post = Parse.Object.extend('Post');
  var props = {
    picture: new Parse.File('photo.jpg', { base64: item.picture }),
    title: item.title,
    description: item.description,
    username: item.username
  };
  console.log(`Saving item #${idx+1}`);
  return new Post().save(props);
};

var data = require('./seed-data.js');
var promises = data.map(saveItem);
Parse.Promise.when(promises)
  .then(function() {
    console.log('saved data successfully');
  }, function(err) {
    console.warn('error saving data:', err);
  });
