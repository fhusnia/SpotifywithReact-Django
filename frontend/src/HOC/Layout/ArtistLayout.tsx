import * as React from 'react';
import ArtistNavbar from '../../components/Navbar/ArtistNavbar';

export interface IArtistLayoutProps {
  children: React.ReactNode
}

export default function ArtistLayout (props: IArtistLayoutProps) {
  return (
    <div className='flex h-screen flex-col'>
        <div><ArtistNavbar/></div>
        <div className='flex flex-grow'>
          <div className='basis-3/12 bg-orange-400'></div>
          <div className='basis-grow'>{props.children}</div>
        </div>
    </div>
  );
}
