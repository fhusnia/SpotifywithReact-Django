
import React from 'react';
import './App.css';
import AuthLayout from './HOC/Layout/AuthLayout';
import ArtistLayout from './HOC/Layout/ArtistLayout';
import ArtistLogin from './pages/Artist/ArtistAuth/ArtistLogin';
import ArtistRegister from './pages/Artist/ArtistAuth/ArtistRegister';
import { Route,Routes,Navigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/hooks';
import ArtistSongs from './pages/Artist/ArtistDashboard/ArtistSongs';
import SongForm from './pages/Artist/SongForm/SongForm';
import { loadStoredAuthData } from './store/slices/authSlice';


function App() {
  const authData = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch()


  React.useEffect(() => {
    dispatch(loadStoredAuthData())
  },[dispatch])

  
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
    }else if(authData.user_type === 'artist'){
      return(
        <ArtistLayout>
          <Routes>
            <Route path="/" element={<ArtistSongs />}/>
            <Route path="/song-form/:songId" element={<SongForm />}/>
            <Route path="/*" element={<Navigate to="/" />} />
      
          </Routes>
        </ArtistLayout>
      )
    }

  },[authData])

  return (
    <div>
      
         {routes}
        

    </div>
  );
}

export default App;

