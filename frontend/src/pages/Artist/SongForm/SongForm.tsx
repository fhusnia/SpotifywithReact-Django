import * as React from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { IArtist, IGenre } from '../../../types';
import { getGenreList } from '../../../api/songApi';
import Autocomplete from '@mui/material/Autocomplete';
import { searchArtist } from '../../../api/authApi';
import { createSong } from '../../../api/songApi';


export interface ISongFormProps {
}


export default function SongForm (props: ISongFormProps) {

  const [title,setTitle] = React.useState<string>('')
  const [description,setDescription] = React.useState<string>('')
  const [duration,setDuration] = React.useState<string>('')


  const[imageFile,setImageFile] = React.useState<File>()
  const[songFile,setSongFile] = React.useState<File>()
  const[possibleGenres,setPossibleGenres] = React.useState<IGenre[]>()
  const[genre,setGenre] = React.useState<IGenre|null>(null)


  const [artistInputValue,setArtistInputValue] = React.useState<string>('')
  const [possibleArtistList,setpossibleArtistList] = React.useState<IArtist[]>([])
  const [selectedArtistList,setSelectedArtistList] = React.useState<IArtist[]>([])


  const imageUploadInputRef = React.useRef<HTMLInputElement>(null)
  const songUploadInputRef = React.useRef<HTMLInputElement>(null)




  const imageClickHandler = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if(imageFile){
      setImageFile(undefined)
      imageUploadInputRef.current!.value = '';
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



  const songRemoveHandler = React.useCallback(() => {
    setSongFile(undefined)
    songUploadInputRef.current!.value = '';
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




  const onArtistChange = (event: React.SyntheticEvent<Element, Event>, value: IArtist[]) => {
      setSelectedArtistList(value)
  }

  const onArtistInputChange = (event: React.SyntheticEvent<Element, Event>, value: string) =>{
      setArtistInputValue(value)
  }


  const submitHandler = React.useCallback(() =>{
    if(title &&  description && duration && genre && selectedArtistList && imageFile && songFile){
      const artistJSON = JSON.stringify(selectedArtistList.map(a => a.id))
      const data = {title ,description, duration ,genre:genre.id, artist:artistJSON,file: songFile}
      createSong(data)
    }

  },[title,description,duration,genre,selectedArtistList,imageFile,songFile])

  React.useEffect(() => {
    getGenreList().then(response => {
      setPossibleGenres(response.data)
    })
  },[])


  React.useEffect(() =>{
    const timeout = setTimeout(() => {
      if(!artistInputValue) return;

      searchArtist(artistInputValue).then(res => {
        setpossibleArtistList(res.data)
      })
      
      return () =>{
        clearTimeout(timeout)
      }

    },500)
  })



  return (
    <div className='p-3'>
        <div className="text-center text-3xl mb-10">Song Form</div>
        <form className='w-10/12 mx-auto mb-10 flex flex-col gap-3'>
          <div>
              <TextField value={title}  onChange={e => setTitle(e.target.value)}   fullWidth  label="Title" variant="outlined" />

          </div>
          <div>
              <TextField value={description}  onChange={e => setDescription(e.target.value)}   fullWidth  label="Description" variant="outlined" multiline rows={3} />

          </div>
          <div>
              <TextField value={duration}  onChange={e => setDuration(e.target.value)}   fullWidth  label="Duration (Seconds)" variant="outlined" type="number"/>

          </div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={possibleGenres!}
            getOptionLabel={(option) => option.title}
            value={genre}
            onChange={(e,g) => setGenre(g)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Genre" />}
          />

          <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={possibleArtistList}
                  onChange={onArtistChange}
                  getOptionLabel={(option) => option.username}
                  value={selectedArtistList}
                  inputValue={artistInputValue}
                  onInputChange={onArtistInputChange}
                  // defaultValue={[top100Films[13]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="filterSelectedOptions"
                      placeholder="Favorites"
                    />
                  )}
        />
          <div className='flex items-center gap-3'>
            {
              songFile
              ?
              <>
                <div>{songFile.name} ({(songFile.size / 1024**2).toFixed(2)})mb</div>
                <Button variant="contained" size="large" color="error" onClick={songRemoveHandler}>Remove Song</Button>

              </>
              :
              <>
                  <div>No Song Uploaded</div>
                <Button variant="contained" size="large" color="primary" onClick={() => songUploadInputRef.current!.click()}>Upload Song</Button>
              </>
            }
          
          
            <input onChange={songUploadHandler}  ref={songUploadInputRef} type="file" className='hidden' />
          </div>
          <div className=''>
              <div className='w-64 h-64 bg-slate-500 rounded cursor-pointer' onClick={imageClickHandler}>
                {imageContentJSX}
              </div>
            <input onChange={imageUploadHandler} ref={imageUploadInputRef} type="file" className='hidden' />

          </div>
          <div className='my-3'>
              <Button variant="contained" color="success" size="large" fullWidth>Save</Button>
          </div>
        </form>
    </div>
  );
}
