'use client';
import React from 'react';
import Lottie from 'react-lottie';
import emptyLottie from '~/core/animations/ressources/emptyLottie.json';
import Link from 'next/link';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: emptyLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const EmptyPlaylist = () => {
  return (
    <div className={'flex h-full flex-col items-center justify-center'}>
      <div className={'mb-8 space-y-4 text-center text-xl italic'}>
        <p className={'text-2xl font-bold'}>Oups cette playlist est vide !</p>
        <p>
          {"N'hésitez pas à la remplir depuis "}
          <Link href={'/tracks'}>
            <span className={'text-orange-500 underline'}>
              la liste de nos musiques
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
