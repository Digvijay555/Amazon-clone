import React from 'react'
import './SubHeader.css'
import {Link} from 'react-router-dom'
export default function SubHeader() {
  return (
    <>
        <div className='subHeader'>
            <div className='category' style={{marginLeft:"15px"}}>All</div>
           <Link to='/pants'> <div className='category'>Pant</div> </Link>
           <Link to='/shirts'> <div className='category'>Shirts</div> </Link>
            <div className='category'>Customer Services</div>
            <div className='category'>Today Deals</div>
            <div className='category'>Fashion</div>
            <div className='category'>Electronics</div>
            <div className='category'>Home and Kitchen</div>
            <div className='category'>Amazon Pay</div>
          
        </div>
    
    </>
  )
}
