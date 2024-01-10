import * as React from 'react';
import { Button, TextField,FormControlLabel,Checkbox } from '@mui/material';

export interface IArtistLoginProps {
}

export default function ArtistLogin (props: IArtistLoginProps) {
  return (
    <div className='bg-neutral-800 w-full md:w-1/2 mx-auto mt-40 p-5 flex flex-col gap-3 rounded'>
      <div className="text-center text-4xl mb-3">Login</div>
      <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth/>
      <TextField id="outlined-basic" label="Password" type='password' variant="outlined" fullWidth/>
      <FormControlLabel control={<Checkbox />} label="Remember me" />
      <Button  variant="contained" fullWidth size="large">Login</Button>
    </div>
  );
}
