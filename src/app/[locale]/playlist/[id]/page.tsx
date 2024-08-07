'use client';

import React, { useEffect, useState } from 'react';
import EmptyPlaylist from '~/app/[locale]/playlist/[id]/components/EmptyPlaylist';
import PlaylistTracksListItem from '~/app/[locale]/playlist/[id]/components/PlaylistTracksListItem';
import {
  deletePlaylist,
  getPlaylist,
  Playlist as PlaylistType,
} from '~/utils/function/localStorage';
import { useRouter } from 'next/navigation';
import { useScopedI18n } from '~/core/locales/client';

export default function Playlist({ params }: { params: { id: string } }) {
  const scopedPlaylist = useScopedI18n('playlist');
  const [playlist, setPlaylist] = useState<PlaylistType | undefined>(undefined);
  const isLikesPlaylist = playlist?.title === 'Likes';
  const router = useRouter();

  const onDeleteClick = () => {
    deletePlaylist(params.id);
    window.dispatchEvent(new Event('storage'));
    router.push('/');
  };

  useEffect(() => {
    const playlist = getPlaylist(params.id);
    setPlaylist(playlist);
  }, []);

  if (!playlist?.tracks.length) {
    return <EmptyPlaylist />;
  }

  return (
    <main className={'px-4 pt-4'}>
      <div className={'flex justify-between'}>
        <h1 className={'text-2xl'}>{playlist.title}</h1>
        {isLikesPlaylist ? null : (
          <button
            onClick={onDeleteClick}
            className={'rounded-full bg-red-500 px-4 py-2 font-bold text-white'}
          >
            {scopedPlaylist('deletePlaylist')}
          </button>
        )}
      </div>
      <ul className={'grid-cols-3 space-y-2'} data-cy={'PlaylistTrackList'}>
        {playlist.tracks.map((track) => (
          <li key={track.id} className={'group p-2'}>
            <PlaylistTracksListItem track={track} playlist={playlist} />
          </li>
        ))}
      </ul>
    </main>
  );
}
