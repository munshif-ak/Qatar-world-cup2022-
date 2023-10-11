import React from 'react'
import Knockout from '../components/Knockout'



function Knockoutgroups() {
  return (
    <div>
      <div className='teams-container1'>
        <span style={{fontSize:'42px', fontWeight:'600',marginLeft:"70px",color:'white'}}>FIFA World Cup™ Knockout and Groups</span>
        <img src='https://digitalhub.fifa.com/transform/c8ec2346-a65d-4488-92b0-903ce0e1f361/FWC-2022-Header-pattern-Web?io=transform:fill,height:144,width:361&quality=75'width={401} height={160}/>

      </div>
      <Knockout/>
    </div>
  )
}

export default Knockoutgroups
