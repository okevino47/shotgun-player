'use client';

import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from 'react';
import { Track } from '~/utils/serverActions/fetchTracks';

type PlayingAudioContextType = {
  currentTrack: Track | null;
  setCurrentTrack: (track: Track) => void;
  currentPlaylist: Track[] | null;
  setCurrentPlaylist: (playlist: Track[]) => void;
};

const PlayingAudioContext = createContext<PlayingAudioContextType>({
  currentTrack: null,
  setCurrentTrack: () => {},
  currentPlaylist: null,
  setCurrentPlaylist: () => {},
});

export const PlayingAudioProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [currentPlaylist, setCurrentPlaylist] = useState<Track[] | null>(null);

  return (
    <PlayingAudioContext.Provider
      value={{
        currentPlaylist,
        setCurrentPlaylist,
        currentTrack,
        setCurrentTrack,
      }}
    >
      {children}
    </PlayingAudioContext.Provider>
  );
};

export const usePlayingAudio = () => useContext(PlayingAudioContext);
