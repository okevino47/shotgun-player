import React from 'react';
import { conditionalClassnames } from '~/utils/function/conditionalClassnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Track } from '~/utils/serverActions/fetchTracks';
import { HeartIcon } from '@heroicons/react/24/outline';
import playlistList from '~/components/NavigationElements/components/SidePanel/components/PlaylistList/index';

interface SidePanelPlaylistLinkProps {
  title: string;
  tracks: Track[];
  id: string;
}

const PlaylistListItem = ({
  title,
  id,
  tracks,
}: SidePanelPlaylistLinkProps) => {
  const pathname = usePathname();
  const isCurrent = pathname.includes(title) || pathname.includes(id);

  return (
    <Link
      data-cy={'playlistListItem'}
      href={`/playlist/${id}`}
      className={conditionalClassnames(
        isCurrent
          ? 'bg-gray-800 text-white'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white',
        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
      )}
    >
      {title === 'Likes' ? (
        <HeartIcon
          className={
            'flex size-6 shrink-0 items-center justify-center rounded-lg text-[0.625rem] font-medium text-gray-400 group-hover:text-white'
          }
        />
      ) : (
        <span
          className={
            'flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white'
          }
        >
          {title.slice(0, 1).toUpperCase()}
        </span>
      )}
      <div className={'flex w-full justify-between'}>
        <span className={'truncate'}>{title}</span>
        <span className={'truncate'}>{tracks.length}</span>
      </div>
    </Link>
  );
};

export default PlaylistListItem;
