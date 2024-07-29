import React from 'react';
import Link from 'next/link';
import { Artist } from '~/utils/serverActions/fetchArtists';

interface ArtistListItemProps {
  artist: Artist;
  index: number;
}

const ArtistListItem = ({ artist, index }: ArtistListItemProps) => {
  return (
    <Link href={`/artist/${artist.id}`}>
      <div className={'flex rounded-2xl border-2 border-gray-400 px-4 py-2'}>
        <div
          className={`mr-2 flex size-12 items-center justify-center rounded-full ${index % 2 === 0 ? 'bg-purple-600' : 'bg-amber-300'}`}
        >
          <p
            className={`text-xl font-bold ${index % 2 === 0 ? 'text-white' : 'text-black'}`}
          >
            {artist.name.slice(0, 1).toUpperCase()}
          </p>
        </div>
        <div className={'max-w-40 text-sm italic'}>
          <p className={'truncate text-base font-bold not-italic'}>
            {artist.name}
          </p>
          <p>{'X albums'}</p>
          <p>{'X Titres'}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtistListItem;
