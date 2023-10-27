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
        <div className='teamdetailnews-cotainer1-1'>
          <div style={{maxWidth:'574px'}}>
            <div className='teamdetailnews-cotainer1-1-shade'>
            <div>
            <span style={{fontSize:'28px',fontWeight:'500',color:'white'}}>Di Maria to retire from Argentina duty following Copa America</span><br/>
            <span style={{fontSize:'14px',fontWeight:'500',color:'white'}}>The forward has given Argentina more than 15 years of stellar service.</span>
            </div>
              
            </div>

          </div>

        </div>
        <div className='teamdetailnews-cotainer1-2'>
          <div className='teamdetailnews-cotainer1-2-divs'>
            <img style={{borderRadius:'10px'}} src='https://digitalhub.fifa.com/transform/52c4c5e0-b863-4bc9-9bb9-490afad7872f/Argentina-v-France-Final-FIFA-World-Cup-Qatar-2022?io=transform:fill,aspectratio:16x16,width:200&quality=75' width={136} height={136}/>
            <span style={{fontSize:'18px',fontWeight:'500',margin:'15px'}}>Five Qatar 2022 stars who moved in January</span>
          </div>

          <div className='teamdetailnews-cotainer1-2-divs'>
            <img style={{borderRadius:'10px'}} src='https://digitalhub.fifa.com/transform/52c4c5e0-b863-4bc9-9bb9-490afad7872f/Argentina-v-France-Final-FIFA-World-Cup-Qatar-2022?io=transform:fill,aspectratio:16x16,width:200&quality=75' width={136} height={136}/>
            <span style={{fontSize:'18px',fontWeight:'500',margin:'15px'}}>Five Qatar 2022 stars who moved in January</span>
          </div>

          <div className='teamdetailnews-cotainer1-2-divs'>
            <img style={{borderRadius:'10px'}} src='https://digitalhub.fifa.com/transform/52c4c5e0-b863-4bc9-9bb9-490afad7872f/Argentina-v-France-Final-FIFA-World-Cup-Qatar-2022?io=transform:fill,aspectratio:16x16,width:200&quality=75' width={136} height={136}/>
            <span style={{fontSize:'18px',fontWeight:'500',margin:'15px'}}>Five Qatar 2022 stars who moved in January</span>
          </div>

          <div className='teamdetailnews-cotainer1-2-divs'>
            <img style={{borderRadius:'10px'}} src='https://digitalhub.fifa.com/transform/52c4c5e0-b863-4bc9-9bb9-490afad7872f/Argentina-v-France-Final-FIFA-World-Cup-Qatar-2022?io=transform:fill,aspectratio:16x16,width:200&quality=75' width={136} height={136}/>
            <span style={{fontSize:'18px',fontWeight:'500',margin:'15px'}}>Five Qatar 2022 stars who moved in January</span>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default TeamdetailNews
