import React from 'react';
import ArtistList from '~/components/ArtistList';
import { sql } from '@vercel/postgres';
import { Artist as ArtistType } from '~/utils/serverActions/fetchArtists';
import { getScopedI18n } from '~/core/locales/server';

export default async function Artist() {
  const scopedError = await getScopedI18n('error');

  const fetchAllArtist = async () => {
    try {
      const data =
        await sql<ArtistType>`SELECT artists.id, artists.name, tracks.image_url
                              FROM artists
                                       JOIN track_artists ON artists.id = track_artists.artist_id
                                       JOIN tracks ON tracks.id = track_artists.track_id`;

      return data.rows.map((artist) => ({ ...artist }));
    } catch (error) {
      throw new Error(scopedError('artistsFetch'));
    }
  };

  const artistList = await fetchAllArtist();

  return (
    <section>
      <ArtistList artistList={artistList} />
    </section>
  );
}
