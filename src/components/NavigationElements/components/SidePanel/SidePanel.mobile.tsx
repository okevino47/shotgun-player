import React, { Dispatch, SetStateAction } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';
import IconButton from '~/components/IconButton';
import NavigationList from '~/components/NavigationElements/components/SidePanel/components/NavigationList';
import PlaylistList from '~/components/NavigationElements/components/SidePanel/components/PlaylistList';
import PanelHeader from '~/components/NavigationElements/components/SidePanel/components/PanelHeader';
import {
  navigation,
  playlistList,
} from '~/components/NavigationElements/components/SidePanel/constants';

interface SidePanelProps {
  sidePanelOpen: boolean;
  setSidePanelOpen: Dispatch<SetStateAction<boolean>>;
}

const SidePanel = ({ sidePanelOpen, setSidePanelOpen }: SidePanelProps) => {
  return (
    <Dialog
      open={sidePanelOpen}
      onClose={setSidePanelOpen}
      className={'relative z-50 lg:hidden'}
    >
      <DialogBackdrop
        transition
        className={
          'fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0'
        }
      />

      <div className={'fixed inset-0 flex'}>
        <DialogPanel
          transition
          className={
            'relative mr-16 flex w-full max-w-xs flex-1 transition duration-300 ease-in-out data-[closed]:-translate-x-full'
          }
        >
          <TransitionChild>
            <div
              className={
                'absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0'
              }
            >
              <IconButton
                onClick={() => setSidePanelOpen(false)}
                srAlt={'Close sidebar'}
                customClass={'size-6 text-white'}
                icon={<XMarkIcon aria-hidden={'true'} />}
              />
            </div>
          </TransitionChild>

          <div
            className={
              'flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10'
            }
          >
            <PanelHeader />
            <nav className={'flex flex-1 flex-col'}>
              <ul role={'list'} className={'flex flex-1 flex-col gap-y-7'}>
                <NavigationList navigation={navigation} />
                <li>
                  <PlaylistList title={'Your playlist'} list={playlistList} />
                </li>
                <li className={'mt-auto'}>
                  <a
                    href={'#'}
                    className={
                      'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white'
                    }
                  >
                    <Cog6ToothIcon
                      aria-hidden={'true'}
                      className={'size-6 shrink-0'}
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default SidePanel;
