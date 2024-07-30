import React from 'react';
import Lottie from 'react-lottie';
import emptyLottie from '~/core/animations/ressources/emptyLottie.json';
import Link from 'next/link';
import { useI18n } from '~/core/locales/client';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: emptyLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const EmptyPlaylist = () => {
  const t = useI18n();

  return (
    <div className={'flex h-full flex-col items-center justify-center'}>
      <div className={'mb-8 space-y-4 text-center text-xl italic'}>
        <p className={'text-2xl font-bold'}>
          {t('playlist.emptyPlaylistMessage1')}
        </p>
        <p>
          {t('playlist.emptyPlaylistMessage2')}
          <Link href={'/tracks'}>
            <span className={'text-orange-500 underline'}>
              {t('playlist.emptyPlaylistMessage3')}
            </span>
          </Link>
        </p>
      </div>
      <div className={'flex cursor-default'}>
        <Lottie
          isClickToPauseDisabled={true}
          options={defaultOptions}
          height={'100%'}
          width={'100%'}
        />
      </div>
    </div>
  );
};

export default EmptyPlaylist;
