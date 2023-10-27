import React from 'react'
import { Link } from 'react-router-dom'
import './TeamdetailNews.css'

function TeamdetailNews(props) {
  return (
    <div className='teamdetailnews'>
      <div className="container2-1">
          <span className="legancy" style={{fontSize:'24px'}}>News Feed</span>
          <Link to={'https://www.fifa.com/fifaplus/en/cat/17boYmDl4aQhogvFXSovp5'} className="seeall" style={{color:'red'}}>
            SEE ALL
          </Link>
      </div>
      <div className='teamdetailnews-cotainer1'>
        <div style={{ backgroundImage: `url("${props.news.backgroundimg}")` }} className='teamdetailnews-cotainer1-1'>
          <div style={{maxWidth:'574px'}}>
            <div className='teamdetailnews-cotainer1-1-shade'>
            <div style={{marginLeft:'15px',marginBottom:'10px'}}>
            <span style={{fontSize:'28px',fontWeight:'500',color:'white'}}>{props.news.firstcontent}</span><br/>
            <span style={{fontSize:'14px',fontWeight:'500',color:'white'}}>{props.news.firstspan}</span>
            </div>
              
            </div>

          </div>

        </div>
        <div className='teamdetailnews-cotainer1-2'>
          <div className='teamdetailnews-cotainer1-2-divs'>
            <img style={{borderRadius:'10px'}} src={props.news.firstimg} width={136} height={136}/>
            <span style={{fontSize:'18px',fontWeight:'500',margin:'15px'}}>{props.news.secondcontent}</span>
          </div>

          <div className='teamdetailnews-cotainer1-2-divs'>
            <img style={{borderRadius:'10px'}} src={props.news.secondimg} width={136} height={136}/>
            <span style={{fontSize:'18px',fontWeight:'500',margin:'15px'}}>{props.news.thirdcontent}</span>
          </div>

          <div className='teamdetailnews-cotainer1-2-divs'>
            <img style={{borderRadius:'10px'}} src={props.news.thirdimg} width={136} height={136}/>
            <span style={{fontSize:'18px',fontWeight:'500',margin:'15px'}}>{props.news.fourthcontent}</span>
          </div>

          <div className='teamdetailnews-cotainer1-2-divs'>
            <img style={{borderRadius:'10px'}} src={props.news.fourthimg} width={136} height={136}/>
            <span style={{fontSize:'18px',fontWeight:'500',margin:'15px'}}>{props.news.fifthcontent}</span>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default TeamdetailNews
