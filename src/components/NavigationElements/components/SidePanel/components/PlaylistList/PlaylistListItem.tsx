import React from 'react';
import { conditionalClassnames } from '~/utils/function/conditionalClassnames';
import { playlist } from '~/components/NavigationElements/components/SidePanel/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SidePanelPlaylistLinkProps {
  playlist: playlist;
}

const PlaylistListItem = ({ playlist }: SidePanelPlaylistLinkProps) => {
  const pathname = usePathname();
  const isCurrent = pathname.includes(playlist.name);

  return (
    <Link
      href={playlist.href}
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
      <span className={'truncate'}>{title}</span>
    </Link>
  );
};

export default PlaylistListItem;
