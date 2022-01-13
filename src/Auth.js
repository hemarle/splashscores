import React from "react";
import "./Auth.css";
function Auth() {
  const sendDetails = (e) => {
    e.preventDefault();
  };
  return (
    <div className="auth">
      <div className="auth__Card">
        <h2 className="auth__Title"> Sign up</h2>

        <form className="auth__Form" onSubmit={(e) => sendDetails(e)}>
          <div className="auth__FormFlex">
            <input type="text" placeholder="email" />
          </div>
          <div className="auth__Password">
            <div className="auth__Password">
              <input type="password" placeholder="password" />
            </div>
          </div>
          <div className="auth__Checklist">
            <input type="checkbox" />
            <p> Remember me</p>
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Auth;
