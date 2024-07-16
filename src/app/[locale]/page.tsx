'use client';

import Image from 'next/image';
import { useI18n } from '~/core/locales/client';
import AudioPlayer from '~/component/AudioPlayer';

export default function Home() {
  const t = useI18n();

  return (
    <main
      className={'flex min-h-screen flex-col items-center justify-between p-24'}
    >
      <div
        className={
          'z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'
        }
      >
        <p
          className={
            'fixed left-0 top-0 flex w-full justify-center border-b border-gray-300  bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200  lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30'
          }
        >
          {t('welcome', { name: 'Next.js' })}
          <code className={'font-mono font-bold'}></code>
        </p>
        <div
          className={
            'fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:size-auto lg:bg-none dark:from-black dark:via-black'
          }
        >
          <a
            className={
              'pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            }
            href={
              'https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            }
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            By{' '}
            <Image
              src={'/vercel.svg'}
              alt={'Vercel Logo'}
              className={'dark:invert'}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <div className={'flex h-10 w-96 bg-red-400 p-2'}>
          <AudioPlayer
            source={
              'https://p.scdn.co/mp3-preview/aed294e8d398129b19f7fa81b8148aaa63ea29da?cid=b644138492164b009229f271bdc7b751'
            }
          />
        </div>
      </div>
    </main>
  );
}
