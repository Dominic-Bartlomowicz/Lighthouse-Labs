var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


  printPlaylists: function () {
  for(var item in this.playlists) {
    var list = this.playlists[item];
    var id = list.id;
    var name = list.name;
    var tracks = list.tracks.length

    console.log(id+": "+name+" - "+tracks+" tracks");
  }
},

  printTracks: function () {
  for(var item in this.tracks){
    var list = this.tracks[item];
    var id = list.id;
    var name = list.name;
    var artist = list.artist;
    var trackId = list.tracks;
    var album = list.album;

    console.log(id+": "+list.name+" by "+list.artist+" ("+list.album+")");
  }
},

  printPlaylist: function(playlistId) {

  var list = this.playlists[playlistId];
  var id = list.id;
  var trackslen = list.tracks.length;
  var name = list.name;

  console.log(id+": "+name+" - "+trackslen+" tracks");

  var tracks = this['playlists'][playlistId]['tracks'];

  for(var i = 0; i < trackslen; i++)
  {
    var song = this.tracks[tracks[i]];
    var id = song.id;
    var name = song.name;
    var artist = song.artist;
    var trackId = song.tracks;
    var album = song.album;

    console.log(id+": "+name+" by "+artist+" ("+album+")");
  }
},

addTrackToPlaylist: function (trackId, playlistId) {

  var playlist = this['playlists'][playlistId]['tracks'];

  playlist.push(trackId);

  console.log(this['playlists'][playlistId]);
},

  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},

  addTrack: function (name, artist, album) {
  var id = this.uid();
  this.tracks[id] = {id: id, name: name, artist: artist, album: album}
},

  addPlaylist: function (name) {
  var id = this.uid();
  this.playlists[id] = {id: id, name: name, tracks: ["t04"]}
  }
}

library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t03','p01');
library.uid();
library.addTrack("Cool Song","Cool Band","Eyy");
library.addPlaylist("Relaxing Music");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {
//
// }
