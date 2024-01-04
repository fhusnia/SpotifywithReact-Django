import * as React from 'react';
import AuthNavBAr from '../../components/Navbar/AuthNavbar';

export interface ILoginLayoutProps {
    children: React.ReactNode
}

export default function LoginLayout (props: ILoginLayoutProps) {
  return (
    <div className='flex flex-col bg-zinc-950'>
      <header>
        <AuthNavBAr/>
      </header>
      <main>
        <div></div>
      </main>
    </div>
  );
}
