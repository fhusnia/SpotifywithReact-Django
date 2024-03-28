import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';


export interface IcustomerSideBarProps {
}

export default function CustomerSideBar (props: IcustomerSideBarProps) {
  return (
    <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Link to="/">
                    <ListItemButton>
                        <ListItemAvatar>
                        <Avatar>
                            <HomeIcon/>
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Home" secondary="All Songs You Have" />
                    </ListItemButton>
                </Link>
                <Link to="/search">
                    <ListItemButton>
                        <ListItemAvatar>
                        <Avatar>
                            <SearchIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Search" secondary="Add Your New Song" />
                    </ListItemButton>
                </Link>
                <Link to="/profile">
                    <ListItemButton>
                        <ListItemAvatar>
                        <Avatar>
                            <PersonIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Profile" secondary="Edit Your Profile" />
                    </ListItemButton>
                </Link>
      
        </List>
    </div>
  );
}
