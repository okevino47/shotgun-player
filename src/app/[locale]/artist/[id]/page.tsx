import React from 'react';
import { sql } from '@vercel/postgres';
import { Artist as ArtistType } from '~/utils/serverActions/fetchArtists';

export default async function Artist({ params }: { params: { id?: string } }) {
  const fetchArtistDetails = async () => {
    try {
      const data =
        await sql<ArtistType>`SELECT artists.id, artists.name, tracks.image_url
                              FROM artists
                                       JOIN track_artists ON artists.id = track_artists.artist_id
                                       JOIN tracks ON tracks.id = track_artists.track_id
                              WHERE artists.id = ${params.id}`;
      return data.rows[0];
    } catch (error) {
      throw new Error('Error while fetching artist details');
    }
  };
  const artist = await fetchArtistDetails();

  return (
    <main>
      <div>
        <div className={'flex flex-col items-center gap-y-4'}>
          <div
            className={`flex size-52 items-center justify-center overflow-hidden rounded-xl`}
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
          <p className={'text-2xl'}>{artist.name}</p>
        </div>
        <div>
          {/* NB: Simulate some data */}
          <p> Artist story ...</p>
          <p> Albums list ...</p>
          <p> Top artist tracks ...</p>
        </div>
      </div>
    </main>
  );
}
