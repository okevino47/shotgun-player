import {
  HomeIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

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

export const navigation: navigationItem[] = [
  { name: 'Accueil', href: '#', icon: HomeIcon },
  { name: 'Recherche', href: '#', icon: MagnifyingGlassIcon },
  { name: 'Calendrier', href: '#', icon: CalendarIcon },
  { name: 'Toutes nos musiques', href: '/tracks', icon: CalendarIcon },
  { name: 'Tous nos artists', href: '/artists', icon: CalendarIcon },
];

export const playlistList: playlist[] = [
  { id: 1, name: 'Playlist', href: '#' },
  { id: 2, name: 'Playlist2', href: '#' },
];
