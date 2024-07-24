import React from 'react';
import { Track } from '~/utils/serverActions/fetchTracks';

const TrackListItem = ({ track }: { track: Track }) => {
  return (
    <div>
      <p>{`${track.name} --- ${track.id}`}</p>
    </div>
  );
};

export default TrackListItem;
