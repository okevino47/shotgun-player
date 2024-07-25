import React from 'react';
import PanelContent from '~/components/NavigationElements/components/SidePanel/components/PanelContent';

const SidePanel = () => {
  return (
    <div
      className={
        'hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'
      }
    >
      <PanelContent />
    </div>
  );
};

export default SidePanel;
