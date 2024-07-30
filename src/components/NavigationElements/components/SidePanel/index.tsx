'use client';

import React, { Dispatch, SetStateAction } from 'react';
import SidePanelMobile from '~/components/NavigationElements/components/SidePanel/SidePanel.mobile';
import SidePanelDesktop from '~/components/NavigationElements/components/SidePanel/SidePanel.desktop';
import {
  HomeIcon,
  MusicalNoteIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { useScopedI18n } from '~/core/locales/client';

interface SidePanelProps {
  setSidePanelOpen: Dispatch<SetStateAction<boolean>>;
  sidePanelOpen: boolean;
}

export type navigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type playlist = {
  id: number;
  name: string;
  href: string;
};

const SidePanel = ({ setSidePanelOpen, sidePanelOpen }: SidePanelProps) => {
  const scopedNavigation = useScopedI18n('navigationElements.navigation');

  const navigation: navigationItem[] = [
    { name: scopedNavigation('home'), href: '/', icon: HomeIcon },
    {
      name: scopedNavigation('allTracks'),
      href: '/tracks',
      icon: MusicalNoteIcon,
    },
    {
      name: scopedNavigation('allArtists'),
      href: '/artist',
      icon: UserGroupIcon,
    },
  ];

  return (
    <>
      <SidePanelMobile
        navigation={navigation}
        setSidePanelOpen={setSidePanelOpen}
        sidePanelOpen={sidePanelOpen}
      />
      <SidePanelDesktop navigation={navigation} />
    </>
  );
};

export default SidePanel;
