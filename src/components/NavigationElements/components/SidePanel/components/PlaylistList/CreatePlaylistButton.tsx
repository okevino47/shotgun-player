'use client';

import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useModal } from '~/components/Modal/utils/ModalContext';
import CreatePlaylistModalButtons from '~/components/NavigationElements/components/SidePanel/components/CreatePlaylistModalButtons';

const CreatePlaylistButton = () => {
  const { setOpen, setContent } = useModal();

  const handleOnClick = () => {
    setContent({
      title: 'Nouvelle playlist',
      component: <CreatePlaylistModalButtons />,
    });
    setOpen(true);
  };

  return (
    <button
      onClick={handleOnClick}
      type={'button'}
      className={
        'group flex w-full gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-gray-800'
      }
    >
      <span
        className={
          'flex size-6 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-[0.625rem] font-medium text-white'
        }
      >
        <PlusCircleIcon />
      </span>
      <span>{'Create New playlist'}</span>
    </button>
  );
};

export default CreatePlaylistButton;
