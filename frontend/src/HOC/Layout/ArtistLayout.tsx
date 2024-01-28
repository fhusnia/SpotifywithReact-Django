import * as React from 'react';
import ArtistNavbar from '../../components/Navbar/ArtistNavbar';
import ArtistSideBar from '../../components/Sidebar/ArtistSidebar';


export interface IArtistLayoutProps {
  children: React.ReactNode
}

export default function ArtistLayout (props: IArtistLayoutProps) {
  return (
    <div className='flex h-screen flex-col'>
        <div><ArtistNavbar /></div>
        <div className='flex flex-grow'>
          <div className='basis-[-600px] '>
            <ArtistSideBar/>
          </div>
          <div className='flex-grow bg-slate-600'>{props.children}</div>
        </div>
    </div>
  );
}
