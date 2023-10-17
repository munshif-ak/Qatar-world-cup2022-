import React from 'react'
import './worldcuptropy.css'
import { Link } from 'react-router-dom'
function Worldcuptropy() {
  return (
    <div>
      <div className='trophy-container1-main'>
      <div className='shade'>
      <div className='trophy-container1'>
      <div style={{display:'flex',flexDirection:'column'}}>
      <span className='trophy-heading'>FIFA World Cup Trophy</span>
        <span className='trophy-heading'>completes its global tour in </span>
        <span className='trophy-heading'>Qatar</span>
      </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <span className='trophy-heading2'>The FIFA World Cup Trophy Tour by Coca-Cola concluded in Doha, Qatar,</span>
        <span className='trophy-heading2'>ahead of the kick-off of the FIFA World Cup Qatar 2022 later this week.</span>
        </div>
        <Link className='readmore-link' to={'https://www.fifa.com/fifaplus/en/articles/fifa-world-cup-trophy-completes-its-global-tour-in-qatar'}><div className='readmore'>READ MORE</div></Link>

      </div>
      </div>
      </div>

      <div className='trophy-container2'>
        <div style={{maxWidth:'566px'}}>
          <span style={{fontSize:'23px',fontWeight:'500',color:'white'}}>ABOUT THE TROPHY TOUR</span>
          <p style={{fontSize:'17px',fontWeight:'500',color:'white',lineHeight:'160%'}}>
          The FIFA World Cup™ Trophy Tour by Coca-Cola invites football fans to view the most iconic symbol in football and experience the real magic of the world’s largest, most anticipated sporting event – the FIFA World Cup Qatar 2022™. The one-and-only, solid-gold Original FIFA World Cup™ Trophy, the same trophy presented by FIFA to the team winning the FIFA World Cup™, will be on display for fans around the world to see.
          </p>


        </div>
        <div style={{maxWidth:'655px'}}>
          <p style={{fontSize:'38px',color:'white',lineHeight:'140%'}}>
          <span style={{fontSize:'68px',color:'red',}}>"</span>
          For thousands, the FIFA World Cup™ Trophy Tour by Coca-Cola will be a once-in-a-lifetime opportunity to experience the most iconic symbol in football.
          <span style={{fontSize:'68px',color:'red',}}>"</span> </p>

        </div>


      </div>




      <div className='trophy-container3'>
      <div className='shade'>
      <div className='trophy-container3-1'>
      <div style={{display:'flex',flexDirection:'column'}}>
      <span className='trophy-heading'>Spotlight: Your Dreams</span>
       
      </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <span className='trophy-heading2'>We’re looking for the most inspiring fan art from around the globe.</span>
        <span className='trophy-heading2'>Submit your piece for the chance to win amazing prizes.</span>
        </div>
        <Link className='readmore-link' to={'https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022/dreamcontest'}><div className='readmore'>EXPLORE</div></Link>

      </div>
      </div>
      </div>
    </div>
  )
}

export default Worldcuptropy
