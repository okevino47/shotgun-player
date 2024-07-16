import React from 'react';
import ReactPlayer from 'react-player';

const AudioPlayer = ({ source }: { source: string }) => {
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
