import * as React from 'react';
import AuthNavBAr from '../../components/Navbar/AuthNavbar';

export interface IAuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout (props: IAuthLayoutProps) {
  return (
    <div className='flex flex-col bg-zinc-950'>
      <header>
        <AuthNavBAr/>
      </header>
      <main>
        <div>{props.children}</div>
      </main>
    </div>
  );
}
