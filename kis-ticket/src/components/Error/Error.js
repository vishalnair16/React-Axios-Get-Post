import { Typography } from '@mui/material'
import React from 'react'
import './style.css'

function Error() {
  return (
    <div className='error'>
        <Typography variant="h6">
            No Events at Present
        </Typography>
    </div>
  )
}

export default Error