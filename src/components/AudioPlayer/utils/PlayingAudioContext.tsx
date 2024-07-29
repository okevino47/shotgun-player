'use client';

import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Track } from '~/utils/serverActions/fetchTracks';

type Playlist = {
  title: string;
  tracks: Track[];
  id: string;
};

type PlayingAudioContextType = {
  currentTrack: Track | null;
  setCurrentTrack: Dispatch<SetStateAction<Track | null>>;
  currentPlaylist: Playlist | null;
  setCurrentPlaylist: Dispatch<SetStateAction<Playlist | null>>;
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
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(null);

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
