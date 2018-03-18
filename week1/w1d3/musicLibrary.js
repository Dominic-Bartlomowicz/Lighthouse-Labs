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
             }
}



// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for(var item in library.playlists) {
    var list = library.playlists[item];
    var id = list.id;
    var name = list.name;
    var tracks = list.tracks.length

    console.log(id+": "+name+" - "+tracks+" tracks");
  }
}

printPlaylists();
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for(var item in library.tracks){
    var list = library.tracks[item];
    var id = list.id;
    var name = list.name;
    var artist = list.artist;
    var trackId = list.tracks;
    var album = list.album;

    console.log(id+": "+list.name+" by "+list.artist+" ("+list.album+")");
  }

}

printTracks();



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


var printPlaylist = function(playlistId) {

  var list = library.playlists[playlistId];
  var id = list.id;
  var trackslen = list.tracks.length;
  var name = list.name;

  console.log(id+": "+name+" - "+trackslen+" tracks");

  var tracks = library['playlists'][playlistId]['tracks'];

  for(var i = 0; i < trackslen; i++)
  {
    var song = library.tracks[tracks[i]];
  //  console.log(library.tracks[song]);

    var id = song.id;
    var name = song.name;
    var artist = song.artist;
    var trackId = song.tracks;
    var album = song.album;

    console.log(id+": "+name+" by "+artist+" ("+album+")");
}
  }

printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  var playlist = library['playlists'][playlistId]['tracks'];

  playlist.push(trackId);

  console.log(library['playlists'][playlistId]);

}

addTrackToPlaylist('t02','p02');



// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var id = uid();
  library.tracks[id] = {id: id, name: name, artist: artist, album: album}
}


addTrack("Cool Song","Cool Band","Eyy");
printTracks();

// adds a playlist to the library

var addPlaylist = function (name) {
  var id = uid();
  library.playlists[id] = {id: id, name: name, tracks: ["t04"]}
}

addPlaylist("Relaxing Music");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {
//
// }
