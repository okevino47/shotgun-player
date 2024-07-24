import React, { Dispatch, SetStateAction } from 'react';
import IconButton from '~/components/IconButton';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface TopBarProps {
  setSidePanelOpen: Dispatch<SetStateAction<boolean>>;
  sidePanelOpen: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

const TopBar = ({ setSidePanelOpen, children }: TopBarProps) => {
  return (
    <div className={'lg:pl-72'}>
      <div className={'sticky lg:hidden'}>
        <div
          className={
            'top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:hidden lg:px-8'
          }
        >
          <IconButton
            onClick={() => setSidePanelOpen(true)}
            srAlt={'Open sidebar'}
            icon={<Bars3Icon aria-hidden={'true'} />}
          />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TopBar;
