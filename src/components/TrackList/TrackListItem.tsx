'use client';

import React, { useEffect, useState } from 'react';
import { Track } from '~/utils/serverActions/fetchTracks';
import { usePlayingAudio } from '~/components/AudioPlayer/utils/PlayingAudioContext';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/20/solid';
import {
  addTrackToPlaylist,
  isTrackInPlaylist,
  removeTrackFromPlaylist,
} from '~/utils/function/localStorage';

interface TrackListItemProps {
  track: Track;
}

const TrackListItem = ({ track }: TrackListItemProps) => {
  const { setCurrentTrack } = usePlayingAudio();
  const [isLikedTrack, setIsLikedTrack] = useState(false);

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
  }, []);

  return (
    <div
      className={
        'flex w-40 flex-col justify-center rounded-2xl bg-gray-200 p-3'
      }
    >
      <button onClick={handleClick} aria-label={'Play song'}>
        <div
          className={`flex size-28 items-center justify-center overflow-hidden rounded-xl bg-red-400`}
        >
          <img
            className={'object-contain'}
            width={'100%'}
            height={'100%'}
            src={
              'https://i.scdn.co/image/ab67616d0000b2732beee88e97ca512ec5542fb8'
            }
            alt={track.name}
          />
        </div>
        <div className={'max-w-40 text-sm italic'}>
          <p className={'truncate text-base font-bold not-italic'}>
            {track.name}
          </p>
          <p>{'X albums'}</p>
          <p>{'X Titres'}</p>
        </div>
      </button>
      <button onClick={toggleLikeSong} aria-label={'Like or unlike song'}>
        {isLikedTrack ? (
          <FilledHeartIcon className={'size-5 text-red-600'} />
        ) : (
          <HeartIcon className={'size-5'} />
        )}
      </button>
    </div>
  );
};

export default TrackListItem;
