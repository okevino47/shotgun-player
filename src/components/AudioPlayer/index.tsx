'use client';
import React, { lazy, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { usePlayingAudio } from '~/components/AudioPlayer/utils/PlayingAudioContext';

const AudioPlayer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const { currentTrack, setCurrentTrack, currentPlaylist, setCurrentPlaylist } =
    usePlayingAudio();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!!currentTrack) {
      setPlaying(true);
    }
  }, [currentTrack]);

  if (!isMounted) {
    return null; // Render nothing until mounted on client
  }

  if (!currentTrack) {
    return null;
  }

  return (
    <div className={'bg-gray-900'}>
      <div className={'my-3 flex h-12 w-full items-center justify-center'}>
        <ReactPlayer
          controls
          url={currentTrack?.preview_url}
          width={'100%'}
          playing={playing}
          height={'100%'}
          volume={0.05} // todo: to remove
          config={{
            file: {
              forceAudio: true,
            },
          }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
