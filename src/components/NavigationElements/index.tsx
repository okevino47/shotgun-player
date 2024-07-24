'use client';

import React, { ReactElement, useState } from 'react';
import TopBar from '~/components/NavigationElements/components/TopBar';
import SidePanel from '~/components/NavigationElements/components/SidePanel';

interface NavigationElementsProps {
  children?: ReactElement | ReactElement[];
}

const NavigationElements = ({ children }: NavigationElementsProps) => {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  return (
    <div className={'h-screen'}>
      <SidePanel
        setSidePanelOpen={setSidePanelOpen}
        sidePanelOpen={sidePanelOpen}
      />

      <TopBar setSidePanelOpen={setSidePanelOpen} sidePanelOpen={sidePanelOpen}>
        <div className={'h-full'}>{children}</div>
      </TopBar>
    </div>
  );
};

export default NavigationElements;
