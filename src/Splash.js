import React from "react";
import "./Splash.css";
import barcaIcon from "./images/barcelona.png";
import realmadridIcon from "./images/realmadrid.png";
import flagIcon from "./images/flag.svg";
import footballIcon from "./images/football.svg";
import basketballIcon from "./images/basketball.svg";
import soccerIcon from "./images/soccer.svg";
import newsIcon from "./images/news.svg";
import arrowIcon from "./images/arrow.svg";
function Splash() {
  return (
    <div className="splash">
      <div className="splash__News">
        <div className="splash__NewsLeft">
          <h3>Liverpool UEFA Champions League Celebration</h3>
          <p> Yesterday, 06:30pm</p>
        </div>
        <div className="splash__NewsRight">
          <img src={newsIcon} alt="" />
        </div>
      </div>

      <div className="splash__Options">
        <div className="splash__Option">
          <img src={soccerIcon} alt="" />
          <p>Soccer</p>
        </div>
        <div className="splash__Option">
          <img src={basketballIcon} alt="" />
          <p>Basketball</p>
        </div>
        <div className="splash__Option">
          <img src={footballIcon} alt="" />
          <p>Football</p>
        </div>
      </div>

      <div className="splash__Content">
        <div className="splash__Card">
          <div className="splash__CardTitle">
            <div className="splash__CardTitleLeft">
              <img src={flagIcon} alt="" />
              <div className="league">
                <h5 className="league__Name">La Liga</h5>
                <p className="league__Country">Spain</p>
              </div>
            </div>
            <img src={arrowIcon} alt="" />
          </div>

          <div className="splash__CardDetails">
            <div className="splash__CardDetail">
              <div className="teams-icons">
                <img src={barcaIcon} alt="" />
                <img src={realmadridIcon} alt="" />
              </div>
              <div className="splash__Teams">
                <h5 className="team">Barcelona vs Real Madrid</h5>
                <p className="score">
                  2 <span>-</span> <span>0</span>
                </p>
              </div>
              <div className="scoreRight">
                <h4>HT</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="splash__Card">
          <div className="splash__CardTitle">
            <div className="splash__CardTitleLeft">
              <img src={flagIcon} alt="" />
              <div className="league">
                <h5 className="league__Name">La Liga</h5>
                <p className="league__Country">Spain</p>
              </div>
            </div>
            <img src={arrowIcon} alt="" />
          </div>

          <div className="splash__CardDetails">
            <div className="splash__CardDetail">
              <div className="teams-icons">
                <img src={barcaIcon} alt="" />
                <img src={realmadridIcon} alt="" />
              </div>
              <div className="splash__Teams">
                <h5 className="team">Barcelona vs Real Madrid</h5>
                <p className="score">
                  2 <span>-</span> <span>0</span>
                </p>
              </div>
              <div className="scoreRight">
                <h4>HT</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
