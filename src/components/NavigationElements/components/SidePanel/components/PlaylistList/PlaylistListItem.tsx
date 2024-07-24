import React from 'react';
import { conditionalClassnames } from '~/utils/function/conditionalClassnames';
import { teamItem } from '~/components/NavigationElements/components/SidePanel/constants';

interface SidePanelPlaylistLinkProps {
  team: teamItem;
}

const PlaylistListItem = ({ team }: SidePanelPlaylistLinkProps) => {
  return (
    <a
      href={team.href}
      className={conditionalClassnames(
        team.current
          ? 'bg-gray-800 text-white'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white',
        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
      )}
    >
      <span
        className={
          'flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white'
        }
      >
        {team.initial}
      </span>
      <span className={'truncate'}>{team.name}</span>
    </a>
  );
};

export default PlaylistListItem;
