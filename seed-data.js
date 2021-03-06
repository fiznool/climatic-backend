'use strict';

var fs = require('fs');
var path = require('path');

var data = [{
  img: 'sunny-1',
  title: 'It\'s Sunny!',
  description: 'A lovely sunny day, as we look over the hills.',
  username: 'Tom'
}, {
  img: 'gloomy-1',
  title: 'It\'s Raining.',
  description: 'It\'s really quite gloomy here.',
  username: 'Tom'
}, {
  img: 'windy-1',
  title: 'It\'s Windy!',
  description: 'Batten down the hatches!!!',
  username: 'Tom'
}, {
  img: 'cloudy-1',
  title: 'It\'s a bit chilly.',
  description: 'Pack your hat and gloves, it\'s a chilly one today.',
  username: 'Tom'
}, {
  img: 'stormy-1',
  title: 'Flash, a-ha!',
  description: 'In a flash, it was gone, the awesome power of lightning!',
  username: 'Tom'
}, {
  img: 'tranquil-1',
  title: 'Tranquility.',
  description: 'Turn on, tune in, zone out.',
  username: 'Tom'
}, {
  img: 'mesmerising-1',
  title: 'Mesmerising!',
  description: 'It\'s not every day you see clouds like that.',
  username: 'Tom'
}, {
  img: 'snowy-1',
  title: 'Frosty the Snowman',
  description: 'Quick, take a picture before he melts. We don\'t often get snow in March!',
  username: 'Tom'
}, {
  img: 'sunset-1',
  title: 'A lovely evening',
  description: 'St Mary Redcliff on a lovely sunny evening.',
  username: 'Tom'
}, {
  img: 'paradise-1',
  title: 'Sail away, sail away',
  description: 'The ocean is a beautiful shade of blue, and look how clear it is. Beautiful!',
  username: 'Tom'
}, {
  img: 'sunny-2',
  title: 'A hazy lookout',
  description: 'A great day for the beach, not a cloud in sight!',
  username: 'Tom'
}, {
  img: 'sunset-2',
  title: 'Extreme camping',
  description: 'These three innocuous looking tents are perched on the side of a volcano, 3000m above sea level. The view was amazing, as was the sunset!',
  username: 'Tom'
}, {
  img: 'stormy-2',
  title: 'Storms a-coming!',
  description: 'The outlook is rain, wind, fire and brimstone.',
  username: 'Tom'
}, {
  img: 'sunny-3',
  title: 'Dangerous waters',
  description: 'But it looks so tempting!',
  username: 'Tom'
}, {
  img: 'windy-2',
  title: 'Let\'s go fly a kite',
  description: 'Watch out or it will be the kite flying you!',
  username: 'Tom'
}, {
  img: 'cloudy-2',
  title: 'Elevated transportation',
  description: 'A lovely view over the Blue Mountains, would be even better if the clouds parted.',
  username: 'Tom'
}, {
  img: 'sunset-3',
  title: 'Beach life.',
  description: 'A beautiful shot of the sun dropping into the ocean. I\'ll drink to that!',
  username: 'Tom'
}, {
  img: 'snowy-2',
  title: 'Winter Wonderland',
  description: 'The trees and fields are covered in a thick blanket of snow. Ideal sledging conditions!',
  username: 'Tom'
}, {
  img: 'sunny-4',
  title: 'Lookout',
  description: 'A beautiful day for a drive in the hills, with spectacular shots over the lake.',
  username: 'Tom'
}, {
  img: 'tranquil-2',
  title: 'Countryside walk',
  description: 'The farmer let us walk through his pale yellow landscape, after the harvest.',
  username: 'Tom'
}, {
  img: 'cloudy-3',
  title: 'Above the clouds',
  description: 'High up, above the clouds, we look down on the hills and valleys and pray that the rain stays away!',
  username: 'Tom'
}, {
  img: 'sunset-4',
  title: 'One summer\'s evening',
  description: 'Beautiful shades of purple, yellow and orange adorn this field.',
  username: 'Tom'
}, {
  img: 'paradise-2',
  title: 'Whitehaven Beach',
  description: 'The whitest sand I ever saw, on a peaceful evening on Whitehaven Beach, with nothing but the waves for company.',
  username: 'Tom'
}, {
  img: 'sunny-5',
  title: 'Vinyard',
  description: 'The finest wines need the best soil and oodles of sunshine. This vinyard on the South Island has both in abundance!',
  username: 'Tom'
}];

data.forEach(function(item) {
  // read binary data
  var file = path.join(__dirname, 'img', `${item.img}.JPG`);
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  item.picture = new Buffer(bitmap).toString('base64');
});

module.exports = data;
