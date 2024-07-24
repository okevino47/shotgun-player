import React from 'react';
import { conditionalClassnames } from '~/utils/function/conditionalClassnames';

import { navigationItem } from '~/components/NavigationElements/components/SidePanel/constants';
import { usePathname } from 'next/navigation';

interface SidePanelLinkProps {
  item: navigationItem;
}

const NavigationListItem = ({ item }: SidePanelLinkProps) => {
  const pathname = usePathname();
  const isCurrent = pathname.includes(item.name);

  return (
    <a
      href={item.href}
      className={conditionalClassnames(
        isCurrent
          ? 'bg-gray-800 text-white'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white',
        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
      )}
    >
      <item.icon aria-hidden={'true'} className={'size-6 shrink-0'} />
      {item.name}
    </a>
  );
};

export default NavigationListItem;
