
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
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { removeNotf } from './store/slices/notfSlice';
import ArtistProfile from './pages/Artist/ArtistDashboard/ArtistProfile';

function App() {
  const authData = useAppSelector(state => state.auth);
  const notfData = useAppSelector(state => state.notf)
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
            <Route path="/profile" element={<ArtistProfile/>}/>
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
          
        <Snackbar
          
          open={notfData.open}
          onClose={() => dispatch(removeNotf())}
          autoHideDuration={notfData.duration}
          anchorOrigin={{ vertical: 'top', horizontal:'right' }}

        >
          <Alert onClose={() => dispatch(removeNotf())} severity={notfData.color}> 
            This is a success message
          </Alert>
        </Snackbar>
        
    </div>
  );
}

export default App;

