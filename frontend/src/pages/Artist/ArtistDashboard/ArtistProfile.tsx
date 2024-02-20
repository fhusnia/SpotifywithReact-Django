import * as React from 'react';
import { Button, TextField,FormControlLabel,Checkbox 
    ,FormControl,InputLabel,Select,MenuItem} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAppSelector } from '../../../store/hooks';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getUserAuthInfo } from '../../../api/authApi';

export interface IArtistProfileprops {
}

export default function ArtistProfile (props: IArtistProfileprops) {
    const [birhDate,setBirthDate] = React.useState<Dayjs|null>(null);
    const [imageFile,setImageFile] = React.useState<File>();
    const [dialogopen,setDialogOpen] = React.useState<boolean>(false);
    const [firstName,setFirstname] = React.useState<string>('');
    const [lastName,setLastname] = React.useState<string>('');
    const [username,setUsername] = React.useState<string>('');
    const [email,setEmail] = React.useState<string>('');
    const [password,setPassword] = React.useState<string>('');
    const [passwordAgain,setPasswordAgain] = React.useState<string>('');

    const authData = useAppSelector(state => state.auth)

    const inforrmationsSaveHandler = React.useCallback(() => {

    },[])

    React.useEffect(() =>{
        getUserAuthInfo(authData.id).then(res =>{
            const userInfo = res.data
            setFirstname(userInfo.first_name)
            setLastname(userInfo.last_name)
            setUsername(userInfo.username)
            setEmail(userInfo.email)
            setBirthDate(dayjs(userInfo.birth_date))

        })
    },[authData])



  return (
    <div>
        <div className='text-4xl text-center p-5'>Artist Profile</div>
            <div>
                <div className="text-2xl">User Informations</div>
                    <hr className='w-1/2'/>
                    <div className='grid grid-cols-2 gap-10'>
                             <div>                        
                                    <div className='mt-5 mb-2'>First Name</div>
                                        <TextField  value={firstName}  onChange={e => setFirstname(e.target.value)} placeholder='John' fullWidth/>
                                    <div className='mt-5 mb-2'>Last Name</div>
                                        <TextField   value={lastName} onChange={e => setLastname(e.target.value)} placeholder="Last Name" fullWidth/>
                                    <div className='mt-5 mb-2'>username</div>
                                        <TextField  value={email} onChange={e => setEmail(e.target.value)} placeholder="Username" variant="outlined" fullWidth/>
                                    <div className='mt-5 mb-2'>Email</div>
                                        <TextField  value={username} onChange={e => setUsername(e.target.value)} placeholder="Email" type="email" variant="outlined" fullWidth/>
                                    
                                   
                                    <div>
                                    <div className='mt-5'>BirthDate</div>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
                                                <DatePicker
                                                label="Controlled picker"
                                                value={birhDate}
                                                onChange={(newValue) => setBirthDate(newValue)}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                        <div className='mt-3'>
                                            <Button variant='contained' fullWidth size='large'>Save</Button>
                                        </div>
                                    </div>
                           
                            </div>
                        <div>
                            <div className='flex items-center justify-center'>
                                <div className=' w-60 h-60  relative'>
                                    <img className='object-cover rounded-full h-full w-full' src ={authData.image} alt=""/>

                                    <div className='absolute top-0 bottom-0 right-0 left-0 bg-slate-300 rounded-full opacity-0 hover:opacity-50 cursor-pointer duration-300 flex items-center justify-center'>
                                        <EditIcon sx={{fontSize: 40,color: 'gray'}}/>
                                    </div>
                                </div> 
                              
                            </div>

                            <div className='mt-5'>
                                <div className="text-2xl">Password Change</div>
                                <hr className='w-1/2'/>
                                <div>
                                    <div className='mt-5 mb-2'>Password</div>
                                        <TextField  placeholder='password' fullWidth/>
                                    <div className='mt-5 mb-2'>Password again</div>
                                        <TextField  placeholder="password123" fullWidth/>
                                    <div className='mt-5'>
                                        <Button variant='contained' fullWidth size='large'>Change</Button>

                                    </div>

                                </div>
                                    
                            </div>
                        </div>
                    </div>
            </div>

            <Dialog
                open={dialogopen}
                onClose={() => {}}
              
            >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {}}>Cancel</Button>
                    <Button onClick={() => {}}>Subscribe</Button>
                </DialogActions>
            </Dialog>
    </div>
            
  );


}
