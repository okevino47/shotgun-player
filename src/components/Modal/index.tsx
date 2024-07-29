'use client';

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useModal } from '~/components/Modal/utils/ModalContext';

const Modal = () => {
  const { open, setOpen, content } = useModal();

  return (
    <Dialog open={open} onClose={setOpen} className={'relative z-10'}>
      <DialogBackdrop
        transition
        className={
          'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
        }
      />

      <div className={'fixed inset-0 z-10 w-screen overflow-y-auto'}>
        <div
          className={
            'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'
          }
        >
          <DialogPanel
            transition
            className={
              'relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
            }
          >
            <div>
              {content?.icon ? (
                <div
                  className={
                    'mx-auto flex size-12 items-center justify-center rounded-full bg-green-100'
                  }
                >
                  {content.icon}
                </div>
              ) : null}
              <div className={'mt-3 text-center sm:mt-5'}>
                <DialogTitle
                  as={'h3'}
                  className={'text-base font-semibold leading-6 text-gray-900'}
                >
                  {content?.title}
                </DialogTitle>
                {content?.message ? (
                  <div className={'mt-2'}>
                    <p className={'text-sm text-gray-500'}>
                      {content?.message}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
            {content?.component}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
