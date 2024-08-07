import React from 'react';
import { Artist } from '~/utils/serverActions/fetchArtists';
import ArtistListItem from '~/components/ArtistList/ArtistListItem';

interface ArtistListProps {
  artistList: Artist[];
}

const ArtistList = async ({ artistList }: ArtistListProps) => {
  return (
    <ul
      data-cy={'artistList'}
      className={'flex flex-wrap justify-around gap-4'}
    >
      {artistList.map((artist, index) => (
        <li key={index}>
          <ArtistListItem artist={artist} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default ArtistList;
