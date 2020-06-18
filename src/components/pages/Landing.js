import React from "react";
import checkIcon from "../../icons/Check2 -square.svg";
// import backgroundImage from "../../img/background-image.jpg";

export default function Landing() {
   return (
      <div className="background-image img-responsive">
         <div className="landing-page container">
            <div className="row">
               <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-12">
                  <h1 className="d-inline ml-6">Knowledge</h1>
                  <img
                     src={checkIcon}
                     alt=""
                     style={{ marginLeft: "10px", marginBottom: "8px" }}
                  />
               </div>
               <div className="col-xl-5 col-sm-6 col-12 mb-6">
                  <div className="card bg-secondary">
                     <div className="card-body">
                        <h2 className="card-title">Welcome to the Team!</h2>
                        <h3>Let's get started.</h3>
                        <h3>Click below to sign up!</h3>
                        <button className="btn btn-primary">Sign up</button>
                        <p>First Name</p>
                        <input className="user-input" />
                        <p>Last Name</p>
                        <input className="user-input" />
                        <p>Email Address</p>
                        <input className="user-input" />
                        <p>Password</p>
                        <input className="user-input" />
                        <button className="btn btn-primary">
                           It's go time!
                        </button>
                     </div>
                  </div>
                  <div className="card d-inline">
                     <div className="card-body bg-secondary">
                        <h2 className="card-title">Welcome Back!</h2>
                        <button className="btn btn-primary">Sign in</button>
                        <p>Email Address</p>
                        <input className="email-address" />
                        <p>Password</p>
                        <input className="password" />
                        <button className="btn btn-primary">Log in</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
