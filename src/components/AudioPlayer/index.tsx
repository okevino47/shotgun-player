'use client';
import React, { lazy, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export const LazyAudioPlayer = lazy(() => import('~/components/AudioPlayer'));

const AudioPlayer = ({ source }: { source: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing until mounted on client
  }

  return (
    <ReactPlayer
      controls
      url={source}
      width={'100%'}
      height={'100%'}
      config={{
        file: {
          forceAudio: true,
        },
      }}
    />
  );
};

export default AudioPlayer;
