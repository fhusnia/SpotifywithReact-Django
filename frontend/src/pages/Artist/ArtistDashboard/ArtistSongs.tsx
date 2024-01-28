import * as React from 'react';
import ArtistSongItem from '../../../components/SongItem/ArtistSongItem';

export interface IArtistSongsProps {
}

export default function ArtistSongs (props: IArtistSongsProps) {
  return (
    <div className='p-3'>
      <div className='text-2xl text-center mb-5'>
            ARTISTSONFG
      </div>
      <div className='flex flex-wrap gap-5'>  
        <div className='w-60'>
            <ArtistSongItem title="anotherlove" image="https://i1.sndcdn.com/artworks-WNzrzG6Yh1VRBSBF-utokcg-t500x500.jpg"/>
        </div>   
           
      </div>
    </div>
  );
}
