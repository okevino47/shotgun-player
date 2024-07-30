import { Track } from '~/utils/serverActions/fetchTracks';
import { usePlayingAudio } from '~/components/AudioPlayer/utils/PlayingAudioContext';
import React, { useEffect, useState } from 'react';
import {
  addTrackToPlaylist,
  getPlaylists,
  isTrackInPlaylist,
  Playlist,
  removeTrackFromPlaylist,
} from '~/utils/function/localStorage';
import { PlayIcon } from '@heroicons/react/24/solid';
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/20/solid';
import { HeartIcon } from '@heroicons/react/24/outline';

import { formatDuration } from '~/utils/function/formatDuration';
import EllipsisTrackButton from '~/components/buttons/EllipsisTrackButton';

const PlaylistTracksListItem = ({
  track,
  playlist,
}: {
  track: Track;
  playlist: Playlist;
}) => {
  const { setCurrentTrack, setCurrentPlaylist } = usePlayingAudio();
  const [playlists, setPlaylists] = useState<null | Playlist[]>(null);
  const [isLikedTrack, setIsLikedTrack] = useState(false);

  const handleClick = () => {
    setCurrentTrack(track);
    setCurrentPlaylist(playlist);
  };

  const toggleLikeSong = () => {
    isLikedTrack
      ? removeTrackFromPlaylist('Likes', track)
      : addTrackToPlaylist('Likes', track);
    setIsLikedTrack((prev) => !prev);
  };

  useEffect(() => {
    setIsLikedTrack(isTrackInPlaylist('Likes', track));
    const playlistsWithoutLikes = getPlaylists().filter(
      (current) => current.title !== playlist.title
    );

    setPlaylists(playlistsWithoutLikes);
  }, []);

  useEffect(() => {
    const handleStoragesChange = () => {
      setIsLikedTrack(isTrackInPlaylist('Likes', track));
      const playlistsWithoutLikes = getPlaylists().filter(
        (current) => current.title !== playlist.title
      );

      setPlaylists(playlistsWithoutLikes);
    };

    window.addEventListener('storage', handleStoragesChange);
    return () => {
      window.removeEventListener('storage', handleStoragesChange);
    };
  }, [track]);

  return (
    <div className={'flex items-center justify-between'}>
      <div className={'flex h-14 items-center space-x-4'}>
        <button onClick={handleClick} className={'p-1'}>
          <PlayIcon className={'size-5'} />
        </button>
        <img
          className={'size-8 object-contain'}
          alt={'album image'}
          src={track.image_url}
        />
        <div>
          <p>{track.name}</p>
          <p>Artist name</p>
        </div>
      </div>
      <p className={'italic'}>Album name</p>
      <div className={'flex gap-x-4'}>
        <button onClick={toggleLikeSong} aria-label={'Like or unlike song'}>
          {isLikedTrack ? (
            <FilledHeartIcon className={'size-5 text-red-600'} />
          ) : (
            <HeartIcon className={'size-5'} />
          )}
        </button>
        <p>{formatDuration(track.duration_ms)}</p>
        <EllipsisTrackButton playlistList={playlists} track={track} />
      </div>
    </div>
  );
};

export default PlaylistTracksListItem;
