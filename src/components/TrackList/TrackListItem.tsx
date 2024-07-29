'use client';

import React from 'react';
import { Track } from '~/utils/serverActions/fetchTracks';
import { usePlayingAudio } from '~/components/AudioPlayer/utils/PlayingAudioContext';

interface TrackListItemProps {
  track: Track;
}

const TrackListItem = ({ track }: TrackListItemProps) => {
  const { setCurrentTrack } = usePlayingAudio();

  const handleClick = () => {
    setCurrentTrack(track);
  };

  return (
    <button
      onClick={handleClick}
      className={
        'flex w-40 flex-col justify-center rounded-2xl bg-gray-200 p-3'
      }
    >
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
  );
};

export default TrackListItem;
