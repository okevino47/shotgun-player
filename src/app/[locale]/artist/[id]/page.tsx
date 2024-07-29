import React from 'react';
import { sql } from '@vercel/postgres';
import { Artist as ArtistType } from '~/utils/serverActions/fetchArtists';

export default async function Artist({ params }: { params: { id?: string } }) {
  const fetchArtistDetails = async () => {
    try {
      const data =
        await sql<ArtistType>`SELECT * FROM artists WHERE artists.id = ${params.id}`;

      return data.rows[0];
    } catch (error) {
      throw new Error('Error while fetching artist details');
    }
  };

  const artistDetails = await fetchArtistDetails();
  console.log(artistDetails);

  return (
    <div>
      <p>artist page {artistDetails.name}</p>
    </div>
  );
}
