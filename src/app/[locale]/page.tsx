import Link from 'next/link';
import { sql } from '@vercel/postgres';
import { Track } from '~/utils/serverActions/fetchTracks';
import { Artist } from '~/utils/serverActions/fetchArtists';
import ArtistList from '~/components/ArtistList';
import TrackList from '~/components/TrackList';
import React from 'react';
import { getI18n } from '~/core/locales/server';

export default async function Home() {
  const t = await getI18n();
  const fetchTopTracks = async () => {
    try {
      const data = await sql<Track>`
          SELECT tracks.name, tracks.duration_ms, tracks.preview_url, tracks.image_url, tracks.id, artists.name AS artist FROM tracks
              JOIN track_artists ON tracks.id = track_artists.track_id
              JOIN artists ON artists.id = track_artists.artist_id 
              LIMIT 4
      `;

      return data.rows.map((track) => ({ ...track }));
    } catch (error) {
      throw new Error(`Error on fetching top tracks`);
    }
  };

  const fetchTopArtists = async () => {
    try {
      const data = await sql<Artist>`
          SELECT artists.name, artists.id, tracks.image_url
          FROM artists
                   JOIN track_artists ON artists.id = track_artists.artist_id
                   JOIN tracks ON tracks.id = track_artists.track_id LIMIT 4
      `;

      return data.rows.map((artist) => ({ ...artist }));
    } catch (error) {
      throw new Error('Error fetching all artists');
    }
  };

  const trackList = await fetchTopTracks();
  const artistList = await fetchTopArtists();

  return (
    <main className={'px-4 pt-4'}>
      <div className={'my-8 flex justify-between'}>
        <p className={'text-2xl font-bold'}>{t('common.topArtists')}</p>
        <Link
          className={'min-w-20 rounded-full border-2 border-gray-400'}
          href={'/artist'}
        >
          <p className={'px-4 py-1 font-bold'}>{t('common.seeAll')}</p>
        </Link>
      </div>
      <ArtistList artistList={artistList} />
      <div className={'my-8 flex justify-between'}>
        <p className={'text-2xl font-bold'}>{t('common.topTracks')}</p>
        <Link
          href={`/tracks`}
          className={'min-w-20 rounded-full border-2 border-gray-400'}
        >
          <p className={'px-4 py-1 font-bold'}>{t('common.seeAll')}</p>
        </Link>
      </div>
      <TrackList trackList={trackList} />
    </main>
  );
}
