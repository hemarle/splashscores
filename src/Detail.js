import React from "react";
import "./Detail.css";
function Detail() {
  return (
    <div className="detail">
      <h2>Uefa Champions League</h2>
      <div className="detail__Teams">
        <div className="detail__Home">
          <img src="" alt="" />
          <p>Arsenal</p>
        </div>
        <div className="detail__Score">
          <h4>2-3</h4>
          <p>90.15</p>
        </div>
        <div className="detail__Away">
          <img src="" alt="" />
          <p>Aston Villa</p>
        </div>
      </div>

      <div className="detail__Options">
        <button className="detail__Option active">Match Detail</button>
        <button className="detail__Option">Line Up</button>
        <button className="detail__Option">H2H</button>
      </div>

      <div className="detail__MatchDetails">
        <ul className="detail__MatchDetail">
            <li>
              <p>8</p>
              <h5>Shooting</h5>
              <p>12</p>
            </li>
            <li>
              <p>8</p>
              <h5>Shooting</h5>
              <p>12</p>
            </li>
            <li>
              <p>8</p>
              <h5>Shooting</h5>
              <p>12</p>
            </li>
            <li>
              <p>8</p>
              <h5>Shooting</h5>
              <p>12</p>
            </li>
            <li>
              <p>8</p>
              <h5>Shooting</h5>
              <p>12</p>
            </li>
            <li>
              <p>8</p>
              <h5>Shooting</h5>
              <p>12</p>
            </li>
            <li>
              <p>8</p>
              <h5>Shooting</h5>
              <p>12</p>
            </li>
            <li>
              <p>8</p>
              <h5>Shooting</h5>
              <p>12</p>
            </li>
          </ul>
        
      </div>
    </div>
  );
}

export default Detail;
