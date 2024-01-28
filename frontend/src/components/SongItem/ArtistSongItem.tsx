import { Button } from '@mui/material';
import * as React from 'react';

export interface IArtistSongItemProps {
    title:string
    image:string
}

export default function ArtistSongItem (props: IArtistSongItemProps) {
  return (
    <div className='border  rounded-lg'>
        <div><img src={props.image} alt="" className='w-full h-40 object-cover rounded-t-lg'/></div>
        <div className='p-1 text-3xl font-semibold'>       
             <div className='text-center'>{props.title}</div>
                <Button variant='contained' color='success' fullWidth>Edit</Button>
                <Button variant='contained' color='error' fullWidth>Edit</Button>
        </div>
    </div>
  );
}
