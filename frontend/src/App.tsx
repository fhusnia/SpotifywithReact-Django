
import React from 'react';
import './App.css';
import LoginLayout from './HOC/Layout/AuthLayout';
import ArtistLogin from './containers/Auth/ArtistLogin';
import ArtistRegister from './containers/Auth/ArtistRegister';

function App() {
  return (
    <div className="bg-slate-400 ">

        <LoginLayout>
          {/* <ArtistLogin/> */}
          <ArtistRegister/>
        </LoginLayout>
    </div>
  );
}

export default App;

