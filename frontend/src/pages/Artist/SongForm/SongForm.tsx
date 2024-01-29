import * as React from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';


export interface ISongFormProps {
}

export default function SongForm (props: ISongFormProps) {

  const[imageFile,setImageFile] = React.useState<File>()
  const[songFile,setSongFile] = React.useState<File>()


  const imageUploadInputRef = React.useRef<HTMLInputElement>(null)
  const songUploadInputRef = React.useRef<HTMLInputElement>(null)



  const imageClickHandler = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if(imageFile){
      setImageFile(undefined)
    } else{
        imageUploadInputRef.current!.click()
    }
  },[imageFile])


  const imageUploadHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>)=>{
      setImageFile(e.target.files![0])
  },[])

  const songUploadHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) =>{
      setSongFile(e.target.files![0])
  },[])


  
 const imageContentJSX = React.useMemo(() =>{
    if(imageFile){
      const imageSrc = URL.createObjectURL(imageFile)
      return(
          <img className="w-full h-full object-cover" src={imageSrc} alt=""/>
      )

    } else{
      return(
        <div className='flex h-full items-center justify-center'><AddIcon style={{fontSize:90}}/></div> 
      )

    }
 },[imageFile])


  return (
    <div className='p-3'>
        <div className="text-center text-3xl mb-10">Song Form</div>
        <form className='w-10/12 mx-auto mb-10 flex flex-col gap-3'>
          <div>
              <TextField fullWidth  label="Title" variant="outlined" />

          </div>
          <div>
              <TextField fullWidth  label="Description" variant="outlined" multiline rows={3} />

          </div>
          <div>
              <TextField fullWidth  label="Duration (Seconds)" variant="outlined" type="number"/>

          </div>
          <div className='flex items-center gap-3'>
            <div>No Song Uploaded</div>
            <Button variant="contained" size="large" color="primary" onClick={() => songUploadInputRef.current!.click()}>Upload Song</Button>
            <input onChange={songUploadHandler}  ref={songUploadInputRef} type="file" className='hidden' />
          </div>
          <div className=''>
              <div className='w-64 h-64 bg-slate-500 rounded cursor-pointer' onClick={imageClickHandler}>
                {imageContentJSX}
              </div>
            <input onChange={imageUploadHandler} ref={imageUploadInputRef} type="file" className='hidden' />

          </div>
        </form>
    </div>
  );
}
