const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

const flattenPlaylists = (playlists) => {
  let flatPlaylist = [];
  if (Array.isArray(playlists)) {
    for (let i = 0; i < playlists.length; i++) {
      let index = 0;
      for (const list of playlists[i]) {
        if (
          list?.trackId &&
          list?.artist &&
          list?.title &&
          list?.votes &&
          list?.bpm
        ) {
          list["source"] = {
            playlistIndex: i,
            trackIndex: index,
          };
          flatPlaylist.push(list);
        }
        index++;
      }
    }
  }
  return flatPlaylist;
};

// console.log(flattenPlaylists(playlists));

const scoreTracks = (tracks) => {
  let newArray = flattenPlaylists(tracks);
  if (newArray !== 0) {
    for (const list of newArray) {
      list["score"] = list.votes * 10 - Math.abs(list.bpm - 120);
    }
  }
  return newArray;
};

// console.log(scoreTracks(playlists))

const dedupeTracks = (track) => {
  let newArray = scoreTracks(track);
  for (let i = 0; i < newArray.length; i++) {
    let currentIndexId = newArray[i].trackId;
    for (let j = 0; j < newArray.length; j++) {
      if (i !== j && currentIndexId === newArray[j].trackId) {
        newArray.splice(j, 1);
        j--;
      }
    }
  }
  return newArray;
};

// console.log(dedupeTracks(playlists))

const enforceArtistQuota = (tracks, num) => {
  let newArray = dedupeTracks(tracks);
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].artists) {
    }
  }
};
