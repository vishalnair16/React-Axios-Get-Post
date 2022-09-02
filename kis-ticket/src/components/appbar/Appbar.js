import * as React from 'react';
import './style.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button,Link} from '@mui/material';
import SecAppBar from './SecAppBar';
import Logo from 'C:/Users/ADMIN/Desktop/React/Activity/kis-ticket/src/resources/images/KIS_Logo.png'
//import { Link } from 'react-router-dom';


export default function SearchAppBar() {
  return (
    <Box className="Appbar" position="relative"  sx={{ flexGrow: 1}}>
      <AppBar  style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}}>
        <Toolbar>
        <Button href='/'>
     <Box component='img' className='Logo-image'  alt='logo' src={Logo}/> 
          <Typography 
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex'} ,color:'white'}}
          >
           | Kis Ticket
          </Typography>
          </Button>
          <Box className='Cart-button'>
          <Button color='inherit' href='/addproduct'><AddShoppingCartIcon/></Button>
          <Typography variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex'} }}>
          <Link href='/addproduct' sx={{color:'white',marginTop:'2px',textDecoration:'none'}}>Add Product</Link>
          </Typography> 
          </Box>
          </Toolbar>
      </AppBar>
      <SecAppBar/>
    </Box>
  );
}
