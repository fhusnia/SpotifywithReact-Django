import * as React from 'react';
import emptyPlaylist from '../../assets/images/empty-playlist.svg'
import { Link } from 'react-router-dom';

export interface IPlaylistCardProps {
}

export default function PlaylistCard(props: IPlaylistCardProps) {
  return (
    <Link to="/">
      <div className='h-72 w-56 p-4 rounded-lg cursor-pointer bg-zinc-900 duration-300 hover:bg-zinc-800'>
        <div className='mb-4'><img className='w-full h-40 rounded-lg' alt="" /></div>
        <div className="text-lg font-semibold mb-3">njwdjnsn</div>
        <div className="text-gray-40">jkjkejejee</div>
      </div>
    </Link>
  );
}