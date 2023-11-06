import React from "react";
import { useParams } from "react-router-dom";
import "./Scoredetail.css";
import Groups from "../components/Groups";
import { ScoreFixture } from "../Data/data";

function Scoredetail() {
  const detailparam = useParams();
  const detailparams = detailparam.scr;

  const sample = ScoreFixture.map((sa) => sa.fixture);
  console.log("@@@", sample);

  const filteredObjects = sample.flatMap((subArray) =>
    subArray.filter((obj) => obj.id === detailparams)
  );
  return (
    <div className="scoredetailmain">
      <h2>{detailparams}</h2>
      <img
        src="https://api.fifa.com/api/v3/picture/tournaments-sq-4/255711"
        width={80}
        height={80}
      />
      <div className="scoredetail1-1">
        <span>Group A</span>
        <span>21 : 30 • 20 NOV 2022</span>
      </div>

      {filteredObjects.map((a) => (
        <div className="scoredetail1-2">
          <div className="scoredetail1-2-1">
            <span>{a.tname1}</span>
            <img
              src={a.flag1}
              width={89}
              height={60}
              style={{ marginLeft: "30px" }}
            />
          </div>
          <span>
            {a.score1} - {a.score2}
          </span>
          <div className="scoredetail1-2-2">
            <img
              src={a.flag2}
              width={89}
              height={60}
              style={{ marginRight: "30px" }}
            />
            <span>{a.tname2}</span>
          </div>
        </div>
      ))}

      <div className="scoredetail1-3">Full Time</div>
      <div className="scoredetail1-4">
        <img
          src="https://extranets.fifa.com/TvStationPhotos/115.png"
          width={35}
          height={26}
          style={{ marginLeft: "10px" }}
        />
        <img
          src="https://extranets.fifa.com/TvStationPhotos/116.png"
          width={35}
          height={26}
          style={{ marginLeft: "10px" }}
        />
        <img
          src="https://extranets.fifa.com/TvStationPhotos/239.png"
          width={40}
          height={20}
          style={{ marginLeft: "10px" }}
        />
        <img
          src="https://extranets.fifa.com/TvStationPhotos/456.png"
          width={40}
          height={20}
          style={{ marginLeft: "10px" }}
        />
        <img
          src="https://extranets.fifa.com/TvStationPhotos/115.png"
          width={35}
          height={26}
          style={{ marginLeft: "10px" }}
        />
        <img
          src="https://extranets.fifa.com/TvStationPhotos/454.png"
          width={40}
          height={20}
          style={{ marginLeft: "10px" }}
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <Groups />
      </div>
    </div>
  );
}

export default Scoredetail;
