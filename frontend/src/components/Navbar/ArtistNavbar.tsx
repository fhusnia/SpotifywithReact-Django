import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import spotifyLogo from '../../assets/images/spotify-logo.png'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ArtistNavbar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img width="130" src={spotifyLogo} alt="spotify-logo"/> 
            
          <Box sx={{ display: 'flex', ml: 'auto'}}>
          
                  <Button
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    Logout
                  </Button>
          
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ArtistNavbar;