import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { I18nProviderClient } from '~/core/locales/client';
import React, { ReactElement } from 'react';
import NavigationElements from '~/components/NavigationElements';
import AudioPlayer from '~/components/AudioPlayer';
import { PlayingAudioProvider } from '~/components/AudioPlayer/utils/PlayingAudioContext';
import { ModalProvider } from '~/components/Modal/utils/ModalContext';
import Modal from '~/components/Modal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shotgun player',
  description: 'A music player built with Shotgun',
};

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  return (
    <html lang={'fr'} className={'h-screen bg-white'}>
      <body className={`h-screen ${inter.className}`}>
        <I18nProviderClient locale={locale}>
          <ModalProvider>
            <NavigationElements>
              <PlayingAudioProvider>
                <div className={'flex h-full flex-col justify-between'}>
                  {children}
                  <AudioPlayer />
                  <Modal />
                </div>
              </PlayingAudioProvider>
            </NavigationElements>
          </ModalProvider>
        </I18nProviderClient>
      </body>
    </html>
  );
}
