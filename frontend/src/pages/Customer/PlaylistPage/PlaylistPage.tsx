import * as React from 'react';
import Playlist from '../../../containers/Customer/Playlist/Playlist';

export interface IPlaylistPageProps {
}

export default function PlaylistPage (props: IPlaylistPageProps) {
  return (
    <div>
        <Playlist/>
    </div>
  );
}
