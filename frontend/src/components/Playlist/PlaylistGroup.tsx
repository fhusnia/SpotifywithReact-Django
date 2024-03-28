import * as React from 'react';
import PlaylistCard from './PlaylistCard';

export interface IPlaylistGroupProps {
  title: string;

}

export default function PlaylistGroup (props: IPlaylistGroupProps) {
  return (
    <div className='mb-10'>
          <div className='text-3xl font-semibold mb-3'>ddd</div>
          <div className='flex flex-wrap gap-4'>
           
                <PlaylistCard />
           
          </div>
        </div>
  );
}