import React from "react";
import "./Auth.css";
function Auth() {
  return (
    <div className="auth">
      <div className="auth__Card">
        <h2 className="auth__Title"> Sign up</h2>
        <div className="auth__Form">
          <form>
            <div className="auth__FormFlex">
              <input type="text" placeholder="email" />
            </div>
            <div className="auth__Password">
              <div className="auth__Password">
                <input type="password" placeholder="password" />
              </div>
            </div>
            <div className="auth__Checklist">
              <input type="radio" />
              <p> Remember me</p>
            </div>

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
