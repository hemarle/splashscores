import React from "react";
import "./Splash.css";
function Splash() {
  return (
    <div className="splash">
      <div className="splash__Options">
        <div className="splash__Option">
          <img src="" alt="" />
          <p>Soccer</p>
        </div>
        <div className="splash__Option">
          <img src="" alt="" />
          <p>Basketball</p>
        </div>
        <div className="splash__Option">
          <img src="" alt="" />
          <p>Football</p>
        </div>
      </div>

      <div className="splash__Content">
        <div className="splash__Card">
          <div className="splash__CardTitle">
            <img src="" alt="" />
            <div className="league">
              <h5>La Liga</h5>
              <p>Spain</p>
            </div>
            <p>></p>
          </div>

          <div className="splash__CardDetails">
            <div className="splash__CardDetail">
              <img src="" alt="" />
              <img src="" alt="" />
              <div className="splash__Teams">
                <h5 className="team">Barcelona vs Real Madrid</h5>
                <p className="score">
                  2 <span>-</span> <span>0</span>
                </p>
              </div>
              <div className="">
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
