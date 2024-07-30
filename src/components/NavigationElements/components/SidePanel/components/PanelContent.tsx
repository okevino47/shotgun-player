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
            <PlaylistList title={'Your playlist'} />
          </li>
          <li className={'mt-auto'}>
            <a
              href={'#'}
              className={
                'group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white'
              }
            >
              <Cog6ToothIcon
                aria-hidden={'true'}
                className={'size-6 shrink-0'}
              />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PanelContent;
