import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { addTrackToPlaylist, Playlist } from '~/utils/function/localStorage';
import { Track } from '~/utils/serverActions/fetchTracks';

interface EllipsisTrackButtonProps {
  playlistList: Playlist[] | null;
  track: Track;
}

const EllipsisTrackButton = ({
  playlistList,
  track,
}: EllipsisTrackButtonProps) => {
  const addToPlaylist = (track: Track, playlist: Playlist) => {
    addTrackToPlaylist(playlist.id, track);
  };

  return (
    <Menu as={'div'} className={'relative inline-block text-left'}>
      <div>
        <MenuButton
          disabled={!playlistList}
          className={
            'inline-flex justify-center gap-x-1.5 rounded-full bg-white p-1 text-sm font-semibold text-gray-900 hover:bg-gray-200'
          }
        >
          <EllipsisHorizontalIcon className={'size-5'} />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className={
          'absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
        }
      >
        {playlistList
          ? playlistList.map((playlist, index) => (
              <MenuItem as={'div'} key={index} className={'py-1'}>
                <button
                  onClick={() => addToPlaylist(track, playlist)}
                  className={
                    'block w-full flex-wrap px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900'
                  }
                >
                  {playlist.title}
                </button>
              </MenuItem>
            ))
          : null}
      </MenuItems>
    </Menu>
  );
};

export default EllipsisTrackButton;
