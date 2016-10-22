angular.module('starter.services', [])

.factory('Photos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Johnson',
      //lng
      //ltd
      //url
    lastText: 'Where are we meeting up?',
    face: 'img/ben.jpg'
  }, {
    id: 1,
    name: 'Max Smith',
    lastText: 'Are you guys ready for a fun night!',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Brown',
    lastText: 'Meet you guys for a beer',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Donovan',
    lastText: 'Raine check for me this time',
    face: 'img/perry.jpg'
  }, {
    id: 4,
    name: 'Mike Bently',
    lastText: 'Beers and bros',
    face: 'img/mike.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
