import React from "react";
import "./Home.css";
import { legancy } from "../Data/data";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{marginTop: '92px'}}>
      <div className="container-1">
        <div className="container-1_1">
          <img
            className="image"
            src="https://digitalhub.fifa.com/transform/98c884b5-8a99-4897-a50a-703275f553c6/Hublot-Final?io=transform:fill&quality=75"
            width={170}
            height={200}
          />
          <span className="match-title">Matches</span>
          <div className="list">
            <div className="list-type-date">
              <span>Final</span>
              <span>18 Dec 2022</span>
            </div>
            <div className="stadium">Lusail Stadium</div>
            <div className="team">
              <div className="abc">
                <div className="team-img-name">
                  <img
                    src="https://api.fifa.com/api/v3/picture/flags-sq-4/ARG"
                    width={24}
                    height={16}
                  />
                  <span className="team-name">Argentina</span>
                </div>
                <div className="team-img-name">
                  <img
                    src="https://api.fifa.com/api/v3/picture/flags-sq-4/FRA"
                    width={24}
                    height={16}
                  />
                  <span className="team-name">France</span>
                </div>
              </div>
              <div className="abcd">
                <div className="team-img-name">
                  <span className="penalty-score">(4)</span>
                  <span className="team-name">3</span>
                </div>
                <div className="team-img-name">
                  <span className="penalty-score">(4)</span>
                  <span className="team-name">3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="list">
            <div className="list-type-date">
              <span>Play-off for third place</span>
              <span>17 Dec 2022</span>
            </div>
            <div className="stadium">Khalifa International Stadium</div>
            <div className="team">
              <div className="abc">
                <div className="team-img-name">
                  <img
                    src="https://api.fifa.com/api/v3/picture/flags-sq-4/CRO"
                    width={24}
                    height={16}
                  />
                  <span className="team-name">Croatia</span>
                </div>
                <div className="team-img-name">
                  <img
                    src="https://api.fifa.com/api/v3/picture/flags-sq-4/MAR"
                    width={24}
                    height={16}
                  />
                  <span className="team-name">Morocco</span>
                </div>
              </div>
              <div className="abcd">
                <div className="team-img-name">
                  <span className="team-name">2</span>
                </div>
                <div className="team-img-name">
                  <span className="team-name">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="image"
            src="https://digitalhub.fifa.com/transform/a04d1886-047f-4fb9-a620-57c43af283a4/1444254771?io=transform:fill,height:910,width:1536&quality=75"
            width={1155}
            height={580}
          />
        </div>
      </div>
      <div className="container2">
        <div className="container2-1">
          <span className="legancy">A LEGACY FOR ALL</span>
          <Link to={'https://www.fifa.com/fifaplus/en/cat/5po8JMxaEl0bf8wL1S0CXl'} className="seeall">
            SEE ALL
          </Link>
        </div>
        <div className="container2-2">
          {legancy.map((l) => (
            <div className="container2-2-1">
              <img
                className="image"
                style={{ borderRadius: "10px 10px 10px 10px" }}
                src={l.image}
                width={655}
                height={368}
              />
              <span className="legancy-tittle">{l.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container3">
        <div className="container3-1">
          <h2 style={{color:'white',fontWeight:'500'}}>THE FINAL</h2>
          <p style={{color:'white',fontSize:'17px'}}>It was the perfect final to an unforgettable FIFA World Cup™, with Argentina and France delivering an all-time classic at Lusail Stadium.</p>
          <p style={{color:'white',fontSize:'17px'}}>La Albiceleste looked to be in control for most of the match and were two goals to the good by half-time, thanks to Lionel Messi and Angel Di Maria. However, France produced a stirring late comeback inspired by two goals from star man Kylian Mbappé.</p>
          <p style={{color:'white',fontSize:'17px'}}>During a breathless and breath-taking extra time, Argentina regained the lead with Messi's second goal, only for Mbappe to level once again. Ultimately, the match was decided by penalties, with Gonzalo Montiel clinching Argentina's historic triumph.</p>
        </div>
        <img src="https://digitalhub.fifa.com/transform/fed7436f-c7b1-4244-87d2-a239f0d404da/Argentina-v-France-Final-FIFA-World-Cup-Qatar-2022?io=transform:fill,aspectratio:16x9,width:1366&quality=75" width={702} height={395} style={{marginTop:'25px'}}/>
        
      </div>
    </div>
  );
}

export default Home;
