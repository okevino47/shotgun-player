import React from 'react';
import { Track } from '~/utils/serverActions/fetchTracks';
import { sql } from '@vercel/postgres';
import TrackList from '~/components/TrackList';
import { getScopedI18n } from '~/core/locales/server';

export default async function Tracks() {
  const scopedCommon = await getScopedI18n('tracks');

  const fetchAllTracks = async () => {
    try {
      const data = await sql<Track>`
          SELECT tracks.name,
                 tracks.duration_ms,
                 tracks.preview_url, 
                 tracks.image_url,
                 tracks.id,
                 artists.name AS artist
          FROM tracks
                   JOIN track_artists ON tracks.id = track_artists.track_id
                   JOIN artists ON artists.id = track_artists.artist_id
      `;

      return data.rows.map((track) => ({ ...track }));
    } catch (error) {
      throw new Error('Error retrieving all songs');
    }
  };

  const trackList = await fetchAllTracks();

  return (
    <main className={'pl-4 pt-4'}>
      <p className={'mb-8 text-xl font-bold'}>{scopedCommon('allMusic')}</p>
      <div>
        <TrackList trackList={trackList} />
      </div>
    </main>
  );
}
