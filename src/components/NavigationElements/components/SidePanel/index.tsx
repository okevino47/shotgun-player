import React, { Dispatch, SetStateAction } from 'react';
import SidePanelMobile from '~/components/NavigationElements/components/SidePanel/SidePanel.mobile';
import SidePanelDesktop from '~/components/NavigationElements/components/SidePanel/SidePanel.desktop';

interface SidePanelProps {
  setSidePanelOpen: Dispatch<SetStateAction<boolean>>;
  sidePanelOpen: boolean;
}

const SidePanel = ({ setSidePanelOpen, sidePanelOpen }: SidePanelProps) => {
  return (
    <>
      <SidePanelMobile
        setSidePanelOpen={setSidePanelOpen}
        sidePanelOpen={sidePanelOpen}
      />
      <SidePanelDesktop />
    </>
  );
};

export default SidePanel;
