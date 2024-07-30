export default {
  common: {
    seeAll: 'See all',
    topTracks: 'Top Tracks',
    topArtists: 'Top Artists',
    ariaLikeButton: 'Like or unlike song',
  },
  error: {
    artistsFetch: 'Error fetching all artists',
  },
  navigationElements: {
    navigation: {
      home: 'Home',
      allTracks: 'All our musics',
      allArtists: 'All our artists',
    },
    playlistSectionTitle: 'Playlists',
    addPlaylist: 'Create new playlist',
  },
  tracks: {
    allMusic: 'All our musics',
    ariaPlayButton: 'Play song',
  },
  playlist: {
    deletePlaylist: 'Delete Playlist',
    emptyPlaylist: 'This playlist is empty',
    playlistTitle: 'Playlist',
    albumAltImage: 'album image',
    emptyPlaylistMessage1: 'Oups, This playlist is empty !',
    emptyPlaylistMessage2: "N'hésitez pas à la remplir depuis ",
    emptyPlaylistMessage3: 'our track list',
  },
  modal: {
    createPlaylist: {
      title: 'Name of the playlist',
      cancelButton: 'Cancel',
      createButton: 'Confirmer',
    },
  },
} as const;
