import React from 'react'
import './Score&fixture.css'
import { ScoreFixture } from '../Data/data'

function Scorefixture() {
  return (
    <div className='score-fixture-maincontainer'>
      <div className="teams-container1">
        <span
          style={{
            fontSize: "42px",
            fontWeight: "600",
            marginLeft: "70px",
            color: "white",
          }}
        >
          Scores & Fixtures 
        </span>
        <img
          src="https://digitalhub.fifa.com/transform/c8ec2346-a65d-4488-92b0-903ce0e1f361/FWC-2022-Header-pattern-Web?io=transform:fill,height:144,width:361&quality=75"
          width={401}
          height={160}
        />
      </div>
      {
        ScoreFixture.map((s)=>(
          <div className='score-fixture-ncontainer1'>
        <div className='date-contai'>
        <span>{s.date}</span>
        <a style={{fontSize:'16px',fontWeight:'500',color:'#00968d'}}>View groups</a>
        </div>
        {s.fixture.map((f)=>(
          <div className='fixtures'>
          <div className='fixtures-1'>
          <div className='matchno-group'>match {f.matchno}, group {f.group}</div>
          <div className='fixtures-2'>
           <span style={{fontSize:'14px',fontWeight:'500'}}>{f.tname1}</span>
           <img src={f.flag1}width={21}height={15}/>
           <span style={{fontSize:'14px',fontWeight:'500'}}>{f.score1} - {f.score2}</span>
           <img src={f.flag2}width={21}height={15}/>
           <span style={{fontSize:'14px',fontWeight:'500'}}>{f.tname2}</span>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
           <div className='FT'>FT</div>
           <div style={{marginLeft:'5px'}} >
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="black"/>
             </svg>

           </div>
          </div>
          </div>
     </div>
        ))}

        <div className='adidas'>
          <img src='https://digitalhub.fifa.com/transform/fb7a438c-6c83-442f-a635-fb1e6e613b3a/adidas-schedule-banner-kvg-1160x68?io=transform:fill&quality=75' width={936} height={54}/>
        </div>
      </div>
        ))
      }
      
    </div>
  )
}

export default Scorefixture
