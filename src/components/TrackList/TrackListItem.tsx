'use client';

import React, { useEffect, useState } from 'react';
import { Track } from '~/utils/serverActions/fetchTracks';
import { usePlayingAudio } from '~/components/AudioPlayer/utils/PlayingAudioContext';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/20/solid';
import {
  addTrackToPlaylist,
  getPlaylists,
  isTrackInPlaylist,
  Playlist,
  removeTrackFromPlaylist,
} from '~/utils/function/localStorage';
import EllipsisTrackButton from '~/components/buttons/EllipsisTrackButton';
import { useI18n } from '~/core/locales/client';

interface TrackListItemProps {
  track: Track;
}

const TrackListItem = ({ track }: TrackListItemProps) => {
  const t = useI18n();
  const { setCurrentTrack } = usePlayingAudio();
  const [isLikedTrack, setIsLikedTrack] = useState(false);
  const [playlistList, setPlaylistList] = useState<null | Playlist[]>(null);

  const handleClick = () => {
    setCurrentTrack(track);
  };

  const toggleLikeSong = () => {
    isLikedTrack
      ? removeTrackFromPlaylist('Likes', track)
      : addTrackToPlaylist('Likes', track);
    setIsLikedTrack((prev) => !prev);
  };

  useEffect(() => {
    setIsLikedTrack(isTrackInPlaylist('Likes', track));
    setPlaylistList(getPlaylists());
  }, []);

  return (
    <div
      className={
        'flex w-40 flex-col justify-center rounded-2xl bg-gray-50 p-3 shadow'
      }
    >
      <button
        className={'flex flex-col items-center justify-center'}
        onClick={handleClick}
        aria-label={t('tracks.ariaPlayButton')}
      >
        <div
          className={`flex size-28 items-center justify-center overflow-hidden rounded-xl bg-red-400`}
        >
          <img
            className={'object-contain'}
            width={'100%'}
            height={'100%'}
            src={track.image_url}
            alt={track.name}
          />
        </div>
        <div className={'max-w-40 text-sm italic'}>
          <p className={'truncate text-base font-bold not-italic'}>
            {track.name}
          </p>
          <p>{track.artist}</p>
        </div>
      </button>
      <div className={'flex justify-between'}>
        <button
          onClick={toggleLikeSong}
          aria-label={t('common.ariaLikeButton')}
        >
          {isLikedTrack ? (
            <FilledHeartIcon className={'size-5 text-red-600'} />
          ) : (
            <HeartIcon className={'size-5'} />
          )}
        </button>
        <EllipsisTrackButton playlistList={playlistList} track={track} />
      </div>
    </div>
  );
};

export default TrackListItem;
