// returns the first 2 top songs played based on the object
function favoriteSongs(playlist) {
  let playlistOrder = playlist.sort((a, b) => b["plays"] - a["plays"]);
  let result = [playlistOrder[0]["title"], playlistOrder[1]["title"]];
  return result;
}

console.log(
  favoriteSongs([
    { title: "Sync or Swim", plays: 3 },
    { title: "Byte Me", plays: 1 },
    { title: "Earbud Blues", plays: 2 },
  ]),
);

console.log(
  favoriteSongs([
    { title: "Skip Track", plays: 98 },
    { title: "99 Downloads", plays: 99 },
    { title: "Clickwheel Love", plays: 100 },
  ]),
);

console.log(
  favoriteSongs([
    { title: "Song A", plays: 42 },
    { title: "Song B", plays: 99 },
    { title: "Song C", plays: 75 },
  ]),
);
