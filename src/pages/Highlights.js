import React from 'react'
import './Highlights.css'
import { Link } from 'react-router-dom'
import {AllHighlights } from '../Data/data'

function Highlights() {
  return (
    <div style={{marginTop: '92px'}}>
      <div className='highlights-container1'>
        <div style={{maxWidth:'473px'}}>
            <h1 style={{color:'white'}}>The Home of all Qatar 2022™ Highlights</h1>
            <p style={{color:'white',fontSize:'17px',fontWeight:'400'}}>FIFA+ is your home for highlights from every game at the FIFA World Cup - minutes after the final whistle. Don't miss all the best action from Qatar 22™. All the goals, all the action, in one place. Sign language highlights for the hearing impaired also available.</p>
        </div>
        <img src='https://digitalhub.fifa.com/transform/03eb7e5d-6d0f-477c-8132-d69bd4056b4f/FIFA-Highlights-FWC-2022?io=transform:fill,aspectratio:16x9,width:1366&quality=75' width={702} height={395}/>

      </div>

      <div className='highlights-container2'>
        <div className="container2-1">
          <span className="legancy">ALL HIGHLIGHTS</span>
          <Link to={'https://www.fifa.com/fifaplus/en/cat/17boYmDl4aQhogvFXSovp5'} className="seeall">
            SEE ALL
          </Link>
        </div>
        <div className='container2-1'>
        {
            AllHighlights.map((a)=>(
                
                <Link to={a.href} className='highlights-container2-2'>
                   <img style={{borderRadius:'10px'}} src={a.img} width={429} height={240}/>
                   <span style={{maxWidth:'428px',fontSize:'16px',fontWeight:'500'}}>{a.tittle}</span>
                </Link>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Highlights
