import React from 'react';
import PanelContent from '~/components/NavigationElements/components/SidePanel/components/PanelContent';
import { navigationItem } from '~/components/NavigationElements/components/SidePanel/index';

interface SidePanelProps {
  navigation: navigationItem[];
}

const SidePanel = ({ navigation }: SidePanelProps) => {
  return (
    <div
      className={
        'hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'
      }
    >
      <PanelContent navigation={navigation} />
    </div>
  );
};

export default SidePanel;
