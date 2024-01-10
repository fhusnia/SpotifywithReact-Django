import * as React from 'react';
import { Button, TextField,FormControlLabel,Checkbox 
,FormControl,InputLabel,Select,MenuItem} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TermsAndPrivacyModal from '../../components/Auth/TermsandPrivacyModal';


const TERMS_AND_PRIVACY = `
loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
`.repeat(10)

export interface IArtistRegisterProps {
}



export default function ArtistRegister(props: IArtistRegisterProps) {
    const [tapModalOpen,setTapModalOpen] = React.useState<boolean>(false)
    const [firstName,setFirstname] = React.useState<string>('');
    const [lastName,setLastname] = React.useState<string>('');
    const [username,setUsername] = React.useState<string>('');
    const [email,setEmail] = React.useState<string>('');
    const [password,setPassword] = React.useState<string>('');
    const [passwordAgain,setPasswordAgain] = React.useState<string>('');
    const [birhDate,setBirthDate] = React.useState<Dayjs|null>();
    const [gender,setGender] = React.useState<string>('');



  return (
    <form className='bg-neutral-800 w-full md:w-1/2 mx-auto mt-20 mb-40 p-5 flex flex-col gap-3 rounded'>
      <div className="text-center text-4xl mb-3">Register</div>
      <TextField value={firstName} onChange={(e) =>setFirstname(e.target.value)} id="outlined-basic" label="First Name" variant="outlined" fullWidth/>
      <TextField value={lastName} onChange={(e) =>setLastname(e.target.value)} id="outlined-basic" label="Last Name" variant="outlined" fullWidth/>
      <TextField value={username} onChange={(e) =>setUsername(e.target.value)} id="outlined-basic" label="Username" variant="outlined" fullWidth/>
      <TextField value={email} onChange={(e) =>setEmail(e.target.value)} id="outlined-basic" label="Email" type="email" variant="outlined" fullWidth/>
      <TextField value={password} onChange={(e) =>setPassword(e.target.value)} id="outlined-basic" label="Password" type="password" variant="outlined" fullWidth/>
      <TextField value={passwordAgain} onChange={(e) =>setPasswordAgain(e.target.value)} id="outlined-basic" label="Password again" type="password" variant="outlined" fullWidth/>
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
                <DatePicker
                label="Controlled picker"
                value={birhDate}
                onChange={(newValue) => setBirthDate(newValue)}
                />
            </DemoContainer>
        </LocalizationProvider>
        </div>
            <FormControl style={{width: '34%'}}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                   onChange={(e) => setGender(e.target.value)}
                >
                    <MenuItem value='man'>Man</MenuItem>
                    <MenuItem value='woman'>Woman</MenuItem>
                    <MenuItem value='other'>Other</MenuItem>
                </Select>
            </FormControl>
        <div className='flex justify-between items-center'>
            <FormControlLabel control={<Checkbox />} label="Allow Terms & Privacy" />
            <div className='font-bold cursor-pointer hover:underline' onClick={() => setTapModalOpen(true)}>Terms and Privacy</div>
        </div>
           <Button variant="contained" fullWidth size="large">Register</Button>
           <TermsAndPrivacyModal open={tapModalOpen} text={TERMS_AND_PRIVACY} onClose={() => setTapModalOpen(false)}/>
    </form>
  );
}
