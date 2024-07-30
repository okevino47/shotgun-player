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
      <div
        className={
          'flex w-72 space-x-2 rounded-2xl bg-gray-50 px-4 py-2 shadow'
        }
      >
        <div>
          {artist.image_url ? (
            <div
              className={`flex size-28 items-center justify-center overflow-hidden rounded-xl`}
            >
              <img
                className={'object-contain'}
                width={'100%'}
                height={'100%'}
                // NB: use image of track as I don't have artist image
                src={artist.image_url}
                alt={artist.name}
              />
            </div>
          ) : (
            <div
              className={`mr-2 flex size-12 items-center justify-center rounded-full ${index % 2 === 0 ? 'bg-purple-600' : 'bg-amber-300'}`}
            >
              <p
                className={`text-xl font-bold ${index % 2 === 0 ? 'text-white' : 'text-black'}`}
              >
                {artist.name.slice(0, 1).toUpperCase()}
              </p>
            </div>
          )}
        </div>
        <div className={'max-w-40 text-sm italic'}>
          <p className={'flex-wrap text-base font-bold not-italic'}>
            {artist.name}
          </p>
          {/*NB: fake data as I don't have number of albums nor or titles */}
          <p>{'X albums'}</p>
          <p>{'X Titres'}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtistListItem;
