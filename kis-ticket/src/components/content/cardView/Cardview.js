import React,{useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import './style.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Grid,CardActionArea,CardActions} from '@mui/material';
import axios from 'axios';
import {getProduct_url} from 'C:/Users/ADMIN/Desktop/React/Activity/kis-ticket/src/components/utils/Apis/Api.js';
import LoadingSpinner from '../../Loading Spinner/Spinner';
import AppPagination from '../../Pagination/AppPagination';
//import ProductImage from 'C:/Users/ADMIN/Desktop/Node/BASIC_Node-GET-POST-API-and-Mongodb-compass-connection-main/Activity/uploads/'

export default function Cardview() {
  const [myData, setMyData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  // const [currentPage,setCurrentPage] = useState(1);

 useEffect(() => {
  setIsLoading(true)
  axios.get(getProduct_url)
  .then((res) => {
    setMyData(res.data)
    setIsLoading(false)
  }).catch((error)=>{
    setErrorMessage("Unable To fetch Data")
    setIsLoading(false)
    console.log()
  })

}, [])

  return(
    <div className='boxxer'>
      <Grid container spacing={4} className='the-grid' >
      {isLoading ? <LoadingSpinner/> : myData.map(product=>
        <>
        <Grid item md={4} xs={8}>
      <Card className='Card-Size' sx={{mt:2,mb:2,maxWidth: 345}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          src={require("C:/Users/ADMIN/Desktop/Node/BASIC_Node-GET-POST-API-and-Mongodb-compass-connection-main/Activity/uploads/"+product.productImage)}
          alt="Product Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" color="text.secondary" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" >
            RS {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" sx={{width:"100%",height:60,m:0}}color="success">
          BUY
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <AppPagination/>
    </>
    )}
     {
      errorMessage && <div style={{marginTop:"350px",marginLeft:"550px"}}>
        <h3>Unable to fetch Data</h3>
        {/* <AppPagination/> */}
      </div>
    } 
    <img src=""></img>
      </Grid> 
    </div>
  );
  }

