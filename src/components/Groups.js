import React from 'react'
import './Groups.css'
import { grp } from '../Data/data'

function Groups() {
  return (
    <div className='groups-main-container'>
        <div className='groups-title'><span style={{fontSize:'24px',fontWeight:'500'}}>GROUPS</span></div>
        {
            grp.map((g) => (
                <div className='group'>
            <div className='groups-teams-firstdiv'>
                <span style={{fontSize:'20px',fontWeight:'500'}}>{g.grpname}</span>
                <div className='groups-teams-firstdiv-1'>
                <span style={{marginLeft:'6px'}} className='group-title'>P</span>
                <span style={{marginLeft:'21px'}} className='group-title'>W</span>
                <span style={{marginLeft:'23px'}} className='group-title'>D</span>
                <span style={{marginLeft:'25px'}} className='group-title'>L</span>
                <span style={{marginLeft:'27px'}} className='group-title'>GD</span>
                <span style={{marginLeft:'20px'}} className='group-title'>Pts</span>
                </div>

            </div>
            <div className='groups-teams'>
                <span className='number-styles'>{g.n1}</span>
                <img style={{marginTop:'3px',marginLeft:'20px'}} src={g.f1} width={24} height={16}/>
                <span style={{marginLeft:'8px'}} className='teamname-style'>{g.Tn1}</span>
                <span style={{marginLeft:'48px'}} className='number-styles'>{g.p1}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.w1}</span>
                <span style={{marginLeft:'24px'}} className='number-styles'>{g.d1}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.L1}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.gd1}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.pts1}</span>
                
                
            </div>
            <div className='groups-teams'>
            <span className='number-styles'>{g.n2}</span>
                <img style={{marginTop:'3px',marginLeft:'20px'}} src={g.f2} width={24} height={16}/>
                <span style={{marginLeft:'8px'}} className='teamname-style'>{g.Tn2}</span>
                <span style={{marginLeft:'48px'}} className='number-styles'>{g.p2}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.w2}</span>
                <span style={{marginLeft:'24px'}} className='number-styles'>{g.d2}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.L2}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.gd2}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.pts2}</span>
                
            </div>
            <div className='groups-teams'>
            <span className='number-styles'>{g.n3}</span>
                <img style={{marginTop:'3px',marginLeft:'20px'}} src={g.f3} width={24} height={16}/>
                <span style={{marginLeft:'8px'}} className='teamname-style'>{g.Tn3}</span>
                <span style={{marginLeft:'48px'}} className='number-styles'>{g.p3}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.w3}</span>
                <span style={{marginLeft:'24px'}} className='number-styles'>{g.d3}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.L3}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.gd3}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.pts3}</span>
                
            </div>
            <div className='groups-teams'>
            <span className='number-styles'>{g.n4}</span>
                <img style={{marginTop:'3px',marginLeft:'20px'}} src={g.f4} width={24} height={16}/>
                <span style={{marginLeft:'8px'}} className='teamname-style'>{g.Tn4}</span>
                <span style={{marginLeft:'48px'}} className='number-styles'>{g.p4}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.w4}</span>
                <span style={{marginLeft:'24px'}} className='number-styles'>{g.d4}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.L4}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.gd4}</span>
                <span style={{marginLeft:'27px'}} className='number-styles'>{g.pts4}</span>
                
            </div>

        </div>
            ))

        }
      
    </div>
  )
}

export default Groups
