import React from "react";
import "./Teamdetailstats.css";
function TeamdetailStats(props) {
  const stats = props.stats;
  const playerstats= props.playerstats
  return (
    <div className="stats-main">
      <h3 style={{ marginLeft: "60px" }}>Team Stats</h3>
      <div className="stats-main1">
        {stats.map((s) => (
          <div className="teamstats">
            <div className="teamstats1-1">
              <span style={{ fontSize: "24px", fontWeight: "500" }}>ARG</span>
              <img
                src="https://api.fifa.com/api/v3/picture/flags-sq-4/ARG"
                width={35}
                height={24}
              />
            </div>
            <div className="teamstats1-2">
              <span
                style={{ fontSize: "42px", fontWeight: "500", color: "red" }}
              >
                {s.point}
              </span>
              <div style={{ fontSize: "18px", fontWeight: "400" }}>
                {s.teamstats}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 style={{ marginLeft: "60px" }}>Player Stats</h3>
        <div className="main-playerstats">
        {
            playerstats.map((p) =>(
                <div className="playerstats">
          <div className="playerstats1">
          <span style={{fontSize:'14px'}}>{p.fistname}</span>
          <span style={{fontSize:'24px',fontWeight:'500'}}>{p.lastname}</span>
          <span style={{fontSize:'42px',fontWeight:'500',color:'red',marginTop:'50px'}}>{p.point}</span>
          <span style={{fontSize:'16px'}}>{p.pointtittle}</span>
          </div>
          <div className="playerstats2">
            <img style={{marginRight:'20px',marginTop:'10px'}} src={p.flag} width={35} height={24}/>
            <img className="image" style={{marginRight:'20px'}} src={p.playerimg} width={127} height={190}/>
          </div>
        </div>
            ))
        }
        </div>
      </div>
    </div>
  );
}

export default TeamdetailStats;
