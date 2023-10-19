import React from 'react'
import './Team.css'
import { teams } from '../Data/data'

function Teams() {
  return (
    <div style={{backgroundColor:'#eeeee4',marginTop: '92px'}}>
      <div className='teams-container1'>
        <span style={{fontSize:'42px', fontWeight:'600',marginLeft:"70px",color:'white'}}>Teams</span>
        <img src='https://digitalhub.fifa.com/transform/c8ec2346-a65d-4488-92b0-903ce0e1f361/FWC-2022-Header-pattern-Web?io=transform:fill,height:144,width:361&quality=75'width={401} height={160}/>

      </div>
      <div className='teams-container2'>
        {
          teams.map((t)=>(
            <div className='teams-container2-cards'>
          <div style={{border:'2px solid #d5c46c',width:'94px',height:'62px'}}>
          <img src={t.flag} width={94} height={62}/>
          </div>
          <span style={{fontSize:'20px',fontWeight:'500'}}>{t.name}</span>
          <span style={{fontSize:'20px',fontWeight:'500'}}>{t.shortname}</span>

        </div>
          ))
        }

      </div>
    </div>
  )
}

export default Teams
