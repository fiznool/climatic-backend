'use strict';

var fs = require('fs');
var path = require('path');

var data = [{
  img: 'sunny-1',
  title: 'It\'s Sunny!',
  description: 'A lovely sunny day, as we look over the hills.'
}, {
  img: 'gloomy-1',
  title: 'It\'s Raining.',
  description: 'It\'s really quite murky here.'
}, {
  img: 'windy-1',
  title: 'It\'s Windy!',
  description: 'Batten down the hatches!!!'
}, {
  img: 'cloudy-1',
  title: 'It\'s a bit chilly.',
  description: 'Pack your hat and gloves, it\'s a chilly one today.'
}, {
  img: 'stormy-1',
  title: 'Storms a-coming!',
  description: 'The outlook is rain, wind, fire and brimstone.'
}, {
  img: 'tranquil-1',
  title: 'Tranquility.',
  description: 'Turn on, tune in, zone out.'
}];

data.forEach(function(item) {
  // read binary data
  var file = path.join(__dirname, 'img', `${item.img}.JPG`);
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  item.picture = new Buffer(bitmap).toString('base64');
});

module.exports = data;
