
import React from 'react';
import './App.css';
import LoginLayout from './HOC/Layout/AuthLayout';
import ArtistLogin from './containers/Auth/ArtistLogin';

function App() {
  return (
    <div className="bg-slate-400 ">

        <LoginLayout>
          <ArtistLogin/>
        </LoginLayout>
    </div>
  );
}

export default App;

