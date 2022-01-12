import React from "react";
import Auth from "./Auth";
import "./Home.css";
import mbappe from './images/Mbappe.png'
function Home() {
  return (
    <div className="home">
      <div className="home__Image">
        <img src={mbappe} alt="footballer " />
      </div>
      <div className="home__Content">
        <h1 className="home__Title"> Discover all about sport</h1>
        <p className="home__About">
          Search millions of jobs and get the inside scoop on companies. Wait
          for what? Let’s get start it!
        </p>
        <div className="home__Auth">
          <button href="/signin"> Sign In</button>
          <button href="/signup"> Sign Up</button>
        </div>

        <Auth/>
      </div>
    </div>
  );
}

export default Home;
