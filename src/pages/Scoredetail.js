import React from 'react'
import { useParams } from 'react-router-dom'
import './Scoredetail.css'
import Groups from '../components/Groups'

function Scoredetail() {
  const detailparam = useParams()
  return (
    <div className='scoredetailmain'>
      <h2>{detailparam.scr}</h2>
      <img src='https://api.fifa.com/api/v3/picture/tournaments-sq-4/255711' width={80} height={80}/>
      <div className='scoredetail1-1'>
        <span>Group A</span>
        <span>21 : 30  •  20 NOV 2022</span>

      </div>

      <div className='scoredetail1-2'>
        <div>
        <span>Qatar</span>
        <img src='https://api.fifa.com/api/v3/picture/flags-sq-1/QAT' width={89} height={60} style={{marginLeft:'30px'}}/>
        </div>
        <span>0 - 2</span>
        <div>
        <img src='https://api.fifa.com/api/v3/picture/flags-sq-1/QAT' width={89} height={60} style={{marginRight:'30px'}}/>
        <span>Ecuador</span>
        </div>


      </div>

      <div className='scoredetail1-3'>Full Time</div>
      <div className='scoredetail1-4'>
        <img src='https://extranets.fifa.com/TvStationPhotos/115.png' width={35} height={26} style={{marginLeft:'10px'}}/>
        <img src='https://extranets.fifa.com/TvStationPhotos/116.png' width={35} height={26} style={{marginLeft:'10px'}}/>
        <img src='https://extranets.fifa.com/TvStationPhotos/239.png' width={40} height={20} style={{marginLeft:'10px'}}/>
        <img src='https://extranets.fifa.com/TvStationPhotos/456.png' width={40} height={20} style={{marginLeft:'10px'}}/>
        <img src='https://extranets.fifa.com/TvStationPhotos/115.png' width={35} height={26} style={{marginLeft:'10px'}}/>
        <img src='https://extranets.fifa.com/TvStationPhotos/454.png' width={40} height={20} style={{marginLeft:'10px'}}/>
      </div>
      <div style={{marginTop:'50px'}}>
      <Groups/>
      </div>
    </div>
  )
}

export default Scoredetail
