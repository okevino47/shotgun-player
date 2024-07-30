import React from 'react';
import PanelHeader from '~/components/NavigationElements/components/SidePanel/components/PanelHeader';
import NavigationList from '~/components/NavigationElements/components/SidePanel/components/NavigationList';
import { navigationItem } from '~/components/NavigationElements/components/SidePanel';
import PlaylistList from '~/components/NavigationElements/components/SidePanel/components/PlaylistList';
import { useScopedI18n } from '~/core/locales/client';

interface PanelContentProps {
  navigation: navigationItem[];
}

const PanelContent = ({ navigation }: PanelContentProps) => {
  const scopedNavigationElement = useScopedI18n('navigationElements');

  return (
    <div
      className={
        'flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4'
      }
    >
      <PanelHeader />
      <nav className={'flex flex-1 flex-col'}>
        <ul role={'list'} className={'flex flex-1 flex-col gap-y-7'}>
          <NavigationList navigation={navigation} />
          <li>
            <PlaylistList
              title={scopedNavigationElement('playlistSectionTitle')}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PanelContent;
