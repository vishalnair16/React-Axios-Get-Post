import React from 'react'
import './style.css'
import CardView from './cardView/Cardview'
import {Box } from '@mui/material' 


export default function Content() {
  return (
       <Box 
        direction="column"
        alignItems="center"
        marginLeft="10%"
        marginRight="10%"
        style={{ minHeight: "100vh"}}
        >
              <CardView />
        </Box>     
           
  )
}
