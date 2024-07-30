'use client';

import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useModal } from '~/components/Modal/utils/ModalContext';
import CreatePlaylistModalButtons from '~/components/NavigationElements/components/SidePanel/components/CreatePlaylistModalButtons';
import { useI18n } from '~/core/locales/client';

const CreatePlaylistButton = () => {
  const { setOpen, setContent } = useModal();
  const t = useI18n();

  const handleOnClick = () => {
    setContent({
      title: t('navigationElements.addPlaylist'),
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
      <span>{t('navigationElements.addPlaylist')}</span>
    </button>
  );
};

export default CreatePlaylistButton;
