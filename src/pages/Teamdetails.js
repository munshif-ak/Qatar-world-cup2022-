import React from 'react'
import { useParams } from 'react-router-dom'
import { teams } from '../Data/data';

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
          <h1>{f.id}</h1>
          <span>{f.name}</span>
          <img src={f.flag} width={94} height={62} />
          </>
        ))
      }
    </div>
  )
}

export default Teamdetails
