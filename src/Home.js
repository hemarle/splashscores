import React, {useState} from "react";
import Auth from "./Auth";
import "./Home.css";
import mbappe from './images/Mbappe.png'
function Home() {
  const [authStatus, setAuthStatus]= useState(false)
  const signFunc=()=>{
   if (authStatus){

     setAuthStatus(false)
   }
   else{
     setAuthStatus(true)
   }
  }
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
          <button  onClick={signFunc} href="/signin"> Sign In</button>
          <button onClick={signFunc} href="/signup"> Sign Up</button>
        </div>

        {
        authStatus &&  <Auth/>
          
          }
      </div>
    </div>
  );
}

export default Home;
