import React from "react";
import "./Standing.css";
import "./Splash";
import soccerIcon from "./images/soccer.svg";
import flagIcon from "./images/flag.svg";
import arrowIcon from "./images/arrow.svg";

function Standing() {
  return (
    <div className="standing">
      <div className="standing__Input">
        <img src={soccerIcon} alt="" />
        <input type="text" placeholder="Search your competition ..." />
      </div>

      <div className="standing__Header">
        <img src={soccerIcon} alt="" />
        <p>Soccer</p>
      </div>
      <>
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
        <div className="standing__Card">
          <ul>
            <li className="standing__CardOption">
              <div className="standing__CardName">
                <p className="team">Team</p>
              </div>
              <div className="standing__CardInfo">
                <p>D</p>
                <p>L</p>
                <p>Ga</p>
                <p>Gd</p>
                <p>Pts</p>
              </div>
            </li>
            <li className="standing__CardOption">
              <div className="standing__CardName">
                <p>Teasssm</p>
              </div>
              <div className="standing__CardInfo">
                <p>2</p>
                <p>11</p>
                <p>6</p>
                <p>23</p>
                <p>328</p>
              </div>
            </li>
            <li className="standing__CardOption">
              <div className="standing__CardName">
                <p>Teasssm</p>
              </div>
              <div className="standing__CardInfo">
                <p>2</p>
                <p>1</p>
                <p>6</p>
                <p>23</p>
                <p>38</p>
              </div>
            </li>
            <li className="standing__CardOption">
              <div className="standing__CardName">
                <p>Teasssm</p>
              </div>
              <div className="standing__CardInfo">
                <p>2</p>
                <p>1</p>
                <p>6</p>
                <p>23</p>
                <p>38</p>
              </div>
            </li>
            <li className="standing__CardOption">
              <div className="standing__CardName">
                <p>Teasssm</p>
              </div>
              <div className="standing__CardInfo">
                <p>2</p>
                <p>1</p>
                <p>6</p>
                <p>23</p>
                <p>38</p>
              </div>
            </li>
          </ul>
        </div>
      </>
      <>
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
        <div className="standing__Card">
          <ul>
            <li className="standing__CardOption">
              <div className="standing__CardName">
                <p className="team">Team</p>
              </div>
              <div className="standing__CardInfo">
                <p>D</p>
                <p>L</p>
                <p>Ga</p>
                <p>Gd</p>
                <p>Pts</p>
              </div>
            </li>
            <li className="standing__CardOption">
              <div className="standing__CardName">
                <p>Teasssm</p>
              </div>
              <div className="standing__CardInfo">
                <p>2</p>
                <p>11</p>
                <p>6</p>
                <p>23</p>
                <p>328</p>
              </div>
            </li>
            <li className="standing__CardOption">
              <div className="standing__CardName">
                <p>Teasssm</p>
              </div>
              <div className="standing__CardInfo">
                <p>2</p>
                <p>1</p>
                <p>6</p>
                <p>23</p>
                <p>38</p>
              </div>
            </li>
            <li className="standing__CardOption">
              <div className="standing__CardName">
                <p>Teasssm</p>
              </div>
              <div className="standing__CardInfo">
                <p>2</p>
                <p>1</p>
                <p>6</p>
                <p>23</p>
                <p>38</p>
              </div>
            </li>
            <li className="standing__CardOption">
              <div className="standing__CardName">
                <p>Teasssm</p>
              </div>
              <div className="standing__CardInfo">
                <p>2</p>
                <p>1</p>
                <p>6</p>
                <p>23</p>
                <p>38</p>
              </div>
            </li>
          </ul>
        </div>
      </>
    </div>
  );
}

export default Standing;
