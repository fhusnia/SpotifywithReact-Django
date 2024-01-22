import * as React from 'react';
import { Button, TextField,FormControlLabel,Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks';
import { artistLoginAction } from '../../../store/slices/authSlice';

export interface IArtistLoginProps {
}

export default function ArtistLogin (props: IArtistLoginProps) {
  const [username,setUsername] = React.useState<string>('')
  const [password,setPassword] = React.useState<string>('')

  const dispatch = useAppDispatch()

  const submitHandler = React.useCallback(() =>{
      if(username && password){
          dispatch(artistLoginAction({username,password}))
      }
  },[username,password,dispatch])


  return (

    <form className='bg-neutral-800 w-full md:w-1/2 mx-auto mt-40 p-5 flex flex-col gap-3 rounded'>
      <div className="text-center text-4xl mb-3">Login</div>
      <TextField onChange={e => setUsername(e.target.value)} value={username} id="outlined-basic" label="Username" variant="outlined" fullWidth/>
      <TextField  onChange={e => setPassword(e.target.value)} value={password} id="outlined-basic" label="Password" type='password' variant="outlined" fullWidth/>
      <FormControlLabel control={<Checkbox />} label="Remember me" />
      <Button onClick={submitHandler} variant="contained" fullWidth size="large">Login</Button>

      <div className='text-center'>
         <Link to="/artist/register/">Sign up</Link>
      </div>
    </form>
  );
}
