import { Track } from '~/utils/serverActions/fetchTracks';

export type Playlist = {
  title: string;
  tracks: Track[];
  id: string;
};

export const getPlaylists = (): Playlist[] => {
  const isLocalStorageAvailable =
    typeof window !== 'undefined' && window.localStorage;
  if (!isLocalStorageAvailable) {
    return [];
  }
  const playlists = localStorage.getItem('playlists');
  return playlists ? JSON.parse(playlists) : [];
};

export const getPlaylist = (search: string): Playlist | undefined => {
  const playlists = getPlaylists();
  return playlists.find(
    (playlist) => playlist.title === search || playlist.id === search
  );
};

export const isTrackInPlaylist = (
  playlistTitle: string,
  track: Track
): boolean => {
  const isLocalStorageAvailable =
    typeof window !== 'undefined' && window.localStorage;
  if (!isLocalStorageAvailable) {
    return false;
  }
  const playlist = getPlaylist(playlistTitle);
  return playlist
    ? playlist.tracks.some((current) => current.id === track.id)
    : false;
};

export const savePlaylists = (playlists: Playlist[]): void => {
  localStorage.setItem('playlists', JSON.stringify(playlists));
};

export const createPlaylist = (playlistTitle: string, id: string): void => {
  const playlists = getPlaylists();
  const newPlaylist = { title: playlistTitle, tracks: [], id };
  playlists.push(newPlaylist);
  savePlaylists(playlists);
};

export const addTrackToPlaylist = (search: string, track: Track): void => {
  const playlists = getPlaylists();
  const playlist = playlists.find((playlist) => {
    return playlist.title === search || playlist.id === search;
  });
  const isDuplicate = isTrackInPlaylist(search, track);
  if (playlist && !isDuplicate) {
    playlist.tracks.push(track);
    savePlaylists(playlists);
  }
};

export const removeTrackFromPlaylist = (
  playlistTitle: string,
  track: Track
): void => {
  const playlists = getPlaylists();
  const playlist = playlists.find(
    (playlist) => playlist.title === playlistTitle
  );
  if (playlist) {
    playlist.tracks = playlist.tracks.filter(
      (current) => current.id !== track.id
    );
    savePlaylists(playlists);
  }
};

export const deletePlaylist = (playlistTitle: string): void => {
  const playlists = getPlaylists();
  const updatedPlaylists = playlists.filter(
    (playlist) =>
      playlist.title !== playlistTitle && playlist.id !== playlistTitle
  );
  savePlaylists(updatedPlaylists);
};
