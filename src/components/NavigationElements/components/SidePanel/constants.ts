import {
  CalendarIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

export type navigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  current: boolean;
};

export type teamItem = {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
};

export const navigation: navigationItem[] = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Settings', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Support', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Help', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Logout', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Profile', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Account', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Billing', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Invoices', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Payments', href: '#', icon: DocumentDuplicateIcon, current: false },
  {
    name: 'Subscriptions',
    href: '#',
    icon: DocumentDuplicateIcon,
    current: false,
  },
];

export const teams: teamItem[] = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];
