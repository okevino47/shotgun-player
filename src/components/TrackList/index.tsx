import React from 'react';
import { Track } from '~/utils/serverActions/fetchTracks';
import TrackListItem from '~/components/TrackList/TrackListItem';

interface TrackListProps {
  trackList: Track[];
}

const TrackList = async ({ trackList }: TrackListProps) => {
  return (
    <ul className={'flex flex-wrap justify-around gap-4'}>
      {trackList.map((track, index) => (
        <li key={index}>
          <TrackListItem track={track} />
        </li>
      ))}
    </ul>
  );
};

export default TrackList;
