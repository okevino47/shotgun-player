'use client';

import React, { useEffect, useState } from 'react';
import PlaylistListItem from '~/components/NavigationElements/components/SidePanel/components/PlaylistList/PlaylistListItem';
import CreatePlaylistButton from '~/components/NavigationElements/components/SidePanel/components/PlaylistList/CreatePlaylistButton';
import {
  createPlaylist,
  getPlaylists,
  Playlist,
} from '~/utils/function/localStorage';
import { v4 as uuidv4 } from 'uuid';

interface PlaylistListProps {
  title: string;
}

const PlaylistList = ({ title }: PlaylistListProps) => {
  const [playlistList, setPlaylistList] = useState<Playlist[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const playlists = getPlaylists();
      if (!playlists.length) {
        createPlaylist('Likes', uuidv4());
      }
      setPlaylistList(playlists);
    }
  }, []);

  useEffect(() => {
    const handleStorageChanges = () => {
      const playlists = getPlaylists();
      setPlaylistList(playlists);
    };

    window.addEventListener('storage', handleStorageChanges);
    return () => window.removeEventListener('storage', handleStorageChanges);
  }, []);

  return (
    <>
      <div className={'text-xl font-semibold leading-6 text-gray-400'}>
        {title}
      </div>
      <ul role={'list'} className={'-mx-2 mt-2 space-y-1'}>
        <li>
          <CreatePlaylistButton />
        </li>
        {playlistList.map(({ title, tracks, id }) => (
          <li key={title}>
            <PlaylistListItem title={title} tracks={tracks} id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlaylistList;
