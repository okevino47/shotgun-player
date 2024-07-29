import { Track } from '~/utils/serverActions/fetchTracks';

export type Playlist = {
  title: string;
  tracks: Track[];
  id: string;
};

export const getPlaylists = (): Playlist[] => {
  const playlists = localStorage.getItem('playlists');
  return playlists ? JSON.parse(playlists) : [];
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

export const addTrackToPlaylist = (
  playlistTitle: string,
  track: Track
): void => {
  const playlists = getPlaylists();
  const playlist = playlists.find(
    (playlist) => playlist.title === playlistTitle
  );
  if (playlist) {
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
    (playlist) => playlist.title !== playlistTitle
  );
  savePlaylists(updatedPlaylists);
};
