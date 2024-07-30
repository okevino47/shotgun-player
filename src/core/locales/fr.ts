export default {
  common: {
    seeAll: 'Voir tout',
    topTracks: 'Meilleures chansons',
    topArtists: 'Meilleurs artistes',
    ariaLikeButton: 'Aimer ou ne pas aimer la chanson',
  },
  error: {
    artistsFetch: 'Erreur lors de la récupération de tous les artistes',
  },
  navigationElements: {
    navigation: {
      home: 'Accueil',
      allTracks: 'Toutes nos musiques',
      allArtists: 'Tous nos artistes',
    },
    playlistSectionTitle: 'Playlists',
    addPlaylist: 'Créer une nouvelle playlist',
  },
  tracks: {
    allMusic: 'Toutes nos musiques',
    ariaPlayButton: 'Lire la chanson',
  },
  playlist: {
    deletePlaylist: 'Supprimer la playlist',
    emptyPlaylist: 'Cette playlist est vide',
    playlistTitle: 'Playlist',
    albumAltImage: "image de l'album",
    emptyPlaylistMessage1: 'Oups, cette playlist est vide !',
    emptyPlaylistMessage2: "N'hésitez pas à la remplir depuis ",
    emptyPlaylistMessage3: 'notre liste de chansons',
  },
  modal: {
    createPlaylist: {
      title: 'Nom de la playlist',
      cancelButton: 'Annuler',
      createButton: 'Confirmer',
    },
  },
} as const;
