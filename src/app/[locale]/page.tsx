import Link from 'next/link';
import { sql } from '@vercel/postgres';
import { Track } from '~/utils/serverActions/fetchTracks';
import { Artist } from '~/utils/serverActions/fetchArtists';
import ArtistList from '~/components/ArtistList';
import TrackList from '~/components/TrackList';
import React from 'react';

export default async function Home() {
  const fetchTopTracks = async () => {
    try {
      const data = await sql<Track>`
        SELECT * FROM tracks LIMIT 4
    `;

      return data.rows.map((track) => ({ ...track }));
    } catch (error) {
      throw new Error(`Error on fetching top tracks`);
    }
  };

  const fetchTopArtists = async () => {
    try {
      const data = await sql<Artist>`
        SELECT id, name FROM artists LIMIT 4
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
        <p className={'text-2xl font-bold'}>{'Top Artists'}</p>
        <Link
          className={'min-w-20 rounded-full border-2 border-gray-400'}
          href={'/artist'}
        >
          <p className={'px-4 py-1 font-bold'}>{'See all'}</p>
        </Link>
      </div>
      <ArtistList artistList={artistList} />
      <div className={'my-8 flex justify-between'}>
        <p className={'text-2xl font-bold'}>{'Top Song'}</p>
        <Link
          href={`/tracks`}
          className={'min-w-20 rounded-full border-2 border-gray-400'}
        >
          <p className={'px-4 py-1 font-bold'}>{'See all'}</p>
        </Link>
      </div>
      <TrackList trackList={trackList} />
    </main>
  );
}
