import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { teams } from '../Data/data';
import './Teamdetails.css'
import TeamdetailNews from '../components/TeamdetailNews';



function Teamdetails() {

  function abc(n){
    if (n.id != undefined){
      var std =n.id.toLowerCase();
      if (std.indexOf(read.toLowerCase()) > -1 ){
        return true;
      }
    }
    return false;
  }

    const params = useParams();
    const read =params.tms
    var filtred = teams.filter(abc)
  
  return (
    <div style={{marginTop: '92px'}}>
      {
        filtred.map((f)=>(
          <>
          <div className="teams-container1" style={{backgroundColor:f.color}}>
        <div style={{display:'flex',marginLeft:'70px',alignItems:'center'}}>
          <div style={{marginTop:'3px'}}><img src={f.flag} width={81} height={54} /></div>
          <span
          style={{
            fontSize: "45px",
            fontWeight: "600",
            marginLeft: "15px",
            color: "white",
          }}
        >
          {f.name}
        </span>
        </div>
        <img
          src={f.banner}
          width={401}
          height={160}
        />
      </div>
      <div className='teamdetail-navbar'>
      <nav>
  <div style={{marginLeft:'90px',height:'60px',}} className="nav nav-tabs nav-underline" id="nav-tab" role="tablist">
    <button className="nav-link text-dark" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">News</button>
    <button className="nav-link text-dark" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Fixtures</button>
    <button className="nav-link text-dark" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Statst</button>
    <button className="nav-link text-dark" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" >Squad</button>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"><TeamdetailNews news={f.news}/></div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">.......</div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
  <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div>

      </div>

      
          
          </>
        ))
      }
    </div>
  )
}

export default Teamdetails
