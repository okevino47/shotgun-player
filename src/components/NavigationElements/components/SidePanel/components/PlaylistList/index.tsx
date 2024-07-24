import React from 'react';
import PlaylistListItem from '~/components/NavigationElements/components/SidePanel/components/PlaylistList/PlaylistListItem';
import { playlist } from '~/components/NavigationElements/components/SidePanel/constants';

interface PlaylistListProps {
  title: string;
  list: playlist[];
}

const PlaylistList = ({ title, list }: PlaylistListProps) => {
  return (
    <>
      <div className={'text-xs font-semibold leading-6 text-gray-400'}>
        {title}
      </div>
      <ul role={'list'} className={'-mx-2 mt-2 space-y-1'}>
        {list.map((playlist: playlist) => (
          <li key={playlist.name}>
            <PlaylistListItem playlist={playlist} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlaylistList;
