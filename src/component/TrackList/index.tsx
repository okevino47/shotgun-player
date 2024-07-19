import React from 'react';
import { Track } from '~/utils/serverActions/fetchTracks';
import TrackListItem from '~/component/TrackList/components/TrackListItem';

interface TrackListProps {
  trackList: Track[];
}

const TrackList = ({ trackList }: TrackListProps) => {
  return trackList.map((track) => (
    <TrackListItem track={track} key={track.id} />
  ));
};

export default TrackList;
