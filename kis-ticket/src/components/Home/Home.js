import { Button } from '@mui/material';
import React from 'react';
import './style.css'

export default function Home(){
    return (
      <div className='Home'>
      <div className='box1'>
      <Button href='/productlist'>View Products</Button>
      </div>
      <div className='box2'>
      <Button href='/addproduct'>Go to Add product</Button>
      </div>
      </div>
    )
}