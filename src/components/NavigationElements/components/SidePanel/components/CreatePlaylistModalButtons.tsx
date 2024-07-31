'use client';

import React from 'react';
import { useModal } from '~/components/Modal/utils/ModalContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createPlaylist } from '~/utils/function/localStorage';
import { v4 as uuidv4 } from 'uuid';
import { useScopedI18n } from '~/core/locales/client';

type FormValues = {
  playlistName: string;
};

const CreatePlaylistModalButtons = () => {
  const { setOpen } = useModal();
  const scopedModal = useScopedI18n('modal.createPlaylist');
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setOpen(false);
    createPlaylist(data.playlistName, uuidv4());
    reset();
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className={'mt-5 flex flex-col items-center justify-center sm:mt-6'}>
      <input
        {...register('playlistName', { required: true })}
        data-cy={'playlistNameField'}
        className={'mb-4 h-10 w-72 rounded border border-gray-300 px-2'}
        placeholder={scopedModal('title')}
      />
      <form onSubmit={handleSubmit(onSubmit)} className={'col-span-2'}>
        <div className={'grid grid-cols-2 gap-x-2 p-4'}>
          <div className={''}>
            <button
              data-cy={'cancelButton'}
              type={'button'}
              onClick={() => setOpen(false)}
              className={
                'inline-flex w-full justify-center rounded-md border-2 border-indigo-600 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-white hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              }
            >
              {scopedModal('cancelButton')}
            </button>
          </div>
          <div>
            <button
              data-cy={'createButton'}
              type={'submit'}
              className={
                'inline-flex w-full justify-center rounded-md border-2 border-indigo-600 bg-white px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              }
            >
              {scopedModal('createButton')}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePlaylistModalButtons;
