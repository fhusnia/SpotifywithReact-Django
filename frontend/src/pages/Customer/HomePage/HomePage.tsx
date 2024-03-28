
import * as React from 'react';
import PlaylistCard from '../../../components/Playlist/PlaylistCard';


export interface IHomePageProps {
}

export default function HomePage(props: IHomePageProps) {
 
  
  return (
    <div className='h-full relative'>
      <div className='absolute top-0 bottom-0 left-0 right-0 overflow-auto p-7'>
          <PlaylistCard/>
      </div>
    </div>
  );
}
