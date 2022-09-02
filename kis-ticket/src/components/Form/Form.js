import React,{ useState} from 'react'
import {Grid,Paper,TextField,Button} from '@mui/material'
import {postProduct_url} from 'C:/Users/ADMIN/Desktop/React/Activity/kis-ticket/src/components/utils/Apis/Api.js';
import axios from 'axios'
import './style.css'


export default function Form() {
  const paperStyle={padding :20,height:'fit-content',width:280, margin:"20px auto",  borderRadius:"10px"}

  const btnstyle={margin:'8px 0'}     
    
    const  [name,setName] = useState('');
    const [description,setDescription] = useState('')
    const [price,setPrice]=useState('')
    const [image,setImage] =useState('')

    function handleSubmit(){
      let formData = new FormData()
      formData.append('name',name)
      formData.append('description',description)
      formData.append('price',price)
      formData.append('productImage',image)

      axios.post(postProduct_url,formData).then((data)=>{
        alert("Product Added Succesfully")
        window.location.replace("/productlist")
      }).catch(()=>{
        alert("Please Try Again")
      })
      
    }


  return (
    <div className='Form'>
      <Grid >
<Paper elevation={10} style={paperStyle}>
    <TextField required name='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} fullWidth sx={{mb:2}} />
    <TextField name='description' placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} fullWidth required sx={{mb:2}}/>
    <TextField name='price' placeholder='Price' value={price} onChange={(e)=>setPrice(e.target.value)} fullWidth required sx={{mb:2}}/>
       <input type="file" name='file' onChange={(e)=>setImage(e.target.files[0])} required/>
              <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={handleSubmit} fullWidth>Submit</Button>
             </Paper>
</Grid>  
    </div>
  )
}

