import React from 'react'
import './Not-found.css'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className='not-found-container'>
      <h1>404</h1>
      <h3>PAGE NOT FOUND</h3>
      <span style={{color:'grey',fontWeight:'500'}}> The page you were looking for can not be found.</span>
      <Link to={'/'}><button className='notfound-button'>Go back to home</button></Link>
    </div>
  )
}

export default Notfound
