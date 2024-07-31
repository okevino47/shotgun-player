'use client';

import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { usePlayingAudio } from '~/components/AudioPlayer/utils/PlayingAudioContext';
import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

enum ControlsActions {
  next,
  previous,
}

const AudioPlayer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const { currentTrack, setCurrentTrack, currentPlaylist, setCurrentPlaylist } =
    usePlayingAudio();
  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (currentTrack) {
      setPlaying(true);
    }
  }, [currentTrack]);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleChangeTrack = (action: ControlsActions) => {
    if (currentPlaylist) {
      const currentIndex = currentPlaylist.tracks.findIndex(
        (track) => track.id === currentTrack?.id
      );
      const nextIndex =
        (action === ControlsActions.next
          ? currentIndex + 1
          : currentIndex - 1) % currentPlaylist.tracks.length;
      setCurrentTrack(currentPlaylist.tracks[nextIndex]);
    }
  };

  const handleProgress = (state: { played: number }) => {
    setProgress(state.played);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPlayed = parseFloat(e.target.value);
    setProgress(newPlayed);
    playerRef.current?.seekTo(newPlayed);
  };

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const closePlayer = () => {
    setCurrentTrack(null);
    setCurrentPlaylist(null);
  };

  if (!isMounted || !currentTrack) {
    return null;
  }

  return (
    <div className={'pb-52'}>
      <div
        className={
          'fixed bottom-0 z-50 w-full bg-gray-900 lg:left-[288px] lg:right-0 lg:w-auto'
        }
      >
        <div className={'my-3 flex items-center p-4'}>
          <div className={'mr-4 flex flex-col items-center'}>
            <img
              src={currentTrack.image_url}
              alt={currentTrack.name}
              className={'mb-2 size-16 rounded object-cover'}
            />
          </div>
          <div className={'flex grow flex-col'}>
            <div className={'mb-2 flex w-full items-center space-x-2'}>
              <span className={'text-white'}>
                {formatTime(progress * currentTrack.duration_ms)}
              </span>
              <input
                type={'range'}
                min={'0'}
                max={'1'}
                step={'0.01'}
                value={progress}
                onChange={handleSeek}
                className={'w-full'}
              />
              <span className={'text-white'}>
                {formatTime(currentTrack.duration_ms)}
              </span>
              <button onClick={closePlayer}>
                <XCircleIcon
                  className={'absolute right-4 top-2 size-6 text-white'}
                />
              </button>
            </div>
            <div
              className={
                'flex items-center justify-center space-x-4 lg:justify-start'
              }
            >
              <button
                onClick={() => handleChangeTrack(ControlsActions.previous)}
              >
                <BackwardIcon className={'size-6 text-white'} />
              </button>
              <button onClick={handlePlayPause}>
                {playing ? (
                  <PauseIcon className={'size-6 text-white'} />
                ) : (
                  <PlayIcon className={'size-6 text-white'} />
                )}
              </button>
              <button onClick={() => handleChangeTrack(ControlsActions.next)}>
                <ForwardIcon className={'size-6 text-white'} />
              </button>
              <p className={'text-white'}>{currentTrack.name}</p>
            </div>
          </div>
          <ReactPlayer
            ref={playerRef}
            url={currentTrack.preview_url}
            width={'0'}
            height={'0'}
            playing={playing}
            onProgress={handleProgress}
            config={{
              file: {
                forceAudio: true,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
