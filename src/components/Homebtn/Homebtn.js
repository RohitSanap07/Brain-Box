import React from 'react'
import imghome from "./../../assets/home.gif"
import {Link} from "react-router-dom"
import './Homebtn.css'
function Homebtn() {
  return (

   <>
    <Link to='/'>
      <img src={imghome} alt='home-img' className='home-img'/>
      </Link>
   </>
  )
}

export default Homebtn