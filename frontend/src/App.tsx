
import React from 'react';
import './App.css';
import AuthLayout from './HOC/Layout/AuthLayout';
import ArtistLogin from './pages/Auth/ArtistLogin';
import ArtistRegister from './pages/Auth/ArtistRegister';
import { Route,Routes } from 'react-router-dom';
import { useAppSelector } from './store/hooks';



function App() {
  const authData = useAppSelector(state => state.auth);

  const routes = React.useMemo(() => {
    if(authData.user_type === 'unauthorized'){
      return(
        <AuthLayout>
          <Routes>
            <Route path="/login" element={<div>Customer Login</div>} />
            <Route path="/register" element={<div>Customer Register</div>} />
            <Route path="/artist/login/" element={<ArtistLogin/>} />
            <Route path="/artist/register/" element={<ArtistRegister/>} />

          </Routes>
        </AuthLayout>
      )
    }

  },[authData])

  return (
    <div className="bg-slate-400 ">
      
         {routes}
        

    </div>
  );
}

export default App;

