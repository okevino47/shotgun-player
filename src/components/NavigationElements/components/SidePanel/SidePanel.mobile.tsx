import React, { Dispatch, SetStateAction } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import IconButton from '~/components/IconButton';
import PanelContent from '~/components/NavigationElements/components/SidePanel/components/PanelContent';
import { navigationItem } from '~/components/NavigationElements/components/SidePanel/index';

interface SidePanelProps {
  sidePanelOpen: boolean;
  setSidePanelOpen: Dispatch<SetStateAction<boolean>>;
  navigation: navigationItem[];
}

const SidePanel = ({
  sidePanelOpen,
  setSidePanelOpen,
  navigation,
}: SidePanelProps) => {
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
          <PanelContent navigation={navigation} />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default SidePanel;
