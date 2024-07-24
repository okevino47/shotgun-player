import React from 'react';
import NavigationListItem from '~/components/NavigationElements/components/SidePanel/components/NavigationList/NavigationListItem';
import { navigationItem } from '~/components/NavigationElements/components/SidePanel/constants';

const NavigationList = ({ navigation }: { navigation: navigationItem[] }) => {
  return (
    <ul role={'list'} className={'-mx-2 space-y-1'}>
      {navigation.map((item: navigationItem) => (
        <li key={item.name}>
          <NavigationListItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
