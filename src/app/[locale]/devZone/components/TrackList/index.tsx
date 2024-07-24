import React from 'react';
import { sql } from '@vercel/postgres';
import { Track } from '~/utils/serverActions/fetchTracks';
import TrackListItem from '~/app/[locale]/devZone/components/TrackList/TrackListItem';

const TrackList = async () => {
  const fetchTopTracks = async () => {
    'use server';

    try {
      const data = await sql<Track>`
        SELECT * FROM tracks LIMIT 4
    `;

      return data.rows.map((track) => ({ ...track }));
    } catch (error) {
      throw new Error(`Error on fetching top tracks`);
    }
  };

  const trackList = await fetchTopTracks();

  return (
    <div>
      <div className={'my-8 flex justify-between'}>
        <p className={'text-2xl font-bold'}>{'Top Song'}</p>
        <div className={'min-w-20 rounded-full border-2 border-gray-400'}>
          <p className={'px-4 py-1 font-bold'}>{'See all'}</p>
        </div>
      </div>
      <ul className={'flex flex-wrap justify-around gap-2'}>
        {trackList.map((track, index) => (
          <li key={index}>
            <TrackListItem track={track} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
