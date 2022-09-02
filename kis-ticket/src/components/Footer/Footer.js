import React from 'react'
import './style.css'
//import { Link } from '@mui/material'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div style={{position:'static'}}>
        <div className='Footer' style={{width:'100%',flexGrow:1}}>
            <div className='Copyright'>
                <p>Copyright 2020 KISTicket V110.1</p>
            </div>
            <div className='FooterLinks'>
                <ul>
                    <Link to='/' style={{marginRight:'20px'}}>Home</Link>
                    <Link to='/#'>Support</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
