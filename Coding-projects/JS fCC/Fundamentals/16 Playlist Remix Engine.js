/*job is to work through these playlists step by step: 
1. combine them into one list
2. score each song
3. remove duplicate songs (by track Id)
4. limit how often the same artist appears
5. create a final play order

*/
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
      for (const tracks of playlists[i]) {
        if (
          tracks?.trackId &&
          tracks?.artist &&
          tracks?.title &&
          tracks?.votes &&
          tracks?.bpm
        ) {
          tracks["source"] = [i, index];
          flatPlaylist.push(tracks);
        }
        index++;
      }
    }
  }
  return flatPlaylist;
};

// console.log(flattenPlaylists(playlists));
const flattenedPlaylist = flattenPlaylists(playlists);

const scoreTracks = (tracks) => {
  if (tracks !== 0) {
    for (const track of tracks) {
      track["score"] = track.votes * 10 - Math.abs(track.bpm - 120);
    }
  }
  return tracks;
};

// console.log(scoreTracks(flattenedPlaylist))
const tracksWithScore = scoreTracks(flattenedPlaylist);

const dedupeTracks = (track) => {
  for (let i = 0; i < track.length; i++) {
    let currentIndexId = track[i].trackId;
    for (let j = 0; j < track.length; j++) {
      if (i !== j && currentIndexId === track[j].trackId) {
        track.splice(j, 1);
        j--;
      }
    }
  }
  return track;
};

// console.log(dedupeTracks(tracksWithScore))
const duplicateTrackId = dedupeTracks(tracksWithScore);

const enforceArtistQuota = (track, maxPerArtist) => {
  for (let i = 0; i < track.length; i++) {
    let currentArtist = track[i].artist;
    let count = 0;
    for (let j = 0; j < track.length; j++) {
      if (currentArtist === track[j].artist) {
        count++;
      }
      if (count > maxPerArtist) {
        track.splice(j, 1);
        j--;
      }
    }
  }
  return track;
};

// console.log(enforceArtistQuota(duplicateTrackId, 1))
const duplicateArtistTrack = enforceArtistQuota(duplicateTrackId, 1);

const buildSchedule = (track) => {
  let schedule = [];
  for (let i = 0; i < track.length; i++) {
    schedule.push({
      slot: i + 1,
      trackId: track[i].trackId,
    });
  }
  return schedule;
};

// console.log(buildSchedule(duplicateArtistTrack))
const trackSchedule = buildSchedule(duplicateArtistTrack);

const remixPlaylist = (playlists, maxOfArtist) => {
  return buildSchedule(
    enforceArtistQuota(
      dedupeTracks(scoreTracks(flattenPlaylists(playlists))),
      maxOfArtist,
    ),
  );
};

console.log(remixPlaylist(playlists, 1));
