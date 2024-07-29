import React from 'react';
import { Track } from '~/utils/serverActions/fetchTracks';
import { sql } from '@vercel/postgres';
import TrackList from '~/components/TrackList';

export default async function Tracks() {
  const fetchAllTracks = async () => {
    try {
      const data = await sql<Track>`
        SELECT * FROM tracks
      `;

      return data.rows.map((track) => ({ ...track }));
    } catch (error) {
      throw new Error('Error retrieving all songs');
    }
  };

  const trackList = await fetchAllTracks();

  return (
    <main className={'pl-4 pt-4'}>
      <p className={'mb-8 text-xl font-bold'}>Toutes nos musiques !</p>
      <div>
        <TrackList trackList={trackList} />
      </div>
    </main>
  );
}
