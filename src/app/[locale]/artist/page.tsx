import React from 'react';
import ArtistList from '~/components/ArtistList';
import { sql } from '@vercel/postgres';
import { Artist as ArtistType } from '~/utils/serverActions/fetchArtists';

export default async function Artist() {
  const fetchAllArtist = async () => {
    try {
      const data =
        await sql<ArtistType>`SELECT artists.id, artists.name, tracks.image_url
                              FROM artists
                                       JOIN track_artists ON artists.id = track_artists.artist_id
                                       JOIN tracks ON tracks.id = track_artists.track_id`;

      return data.rows.map((artist) => ({ ...artist }));
    } catch (error) {
      throw new Error('Error while fetching all artists');
    }
  };

  const artistList = await fetchAllArtist();

  return (
    <section>
      <ArtistList artistList={artistList} />
    </section>
  );
}
