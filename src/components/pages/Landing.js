import React from "react";
import checkIcon from "../../icons/Check2 -square.svg";
// import backgroundImage from "../../img/background-image.jpg";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container">
            <div className="row mt-3">
               <div className="col-12">
                  <h1>Knowledge</h1>
                  <img
                     src={checkIcon}
                     alt=""
                     style={{ marginLeft: "3px", marginBottom: "5px" }}
                  />
               </div>
               <div className="col-12">
                  <div className="card bg-secondary">
                     <div className="card-body">
                        <h2 className="card-title">Welcome to the Team!</h2>
                        <h3>Click below to sign up!</h3>
                        <button className="btn btn-primary">Sign up</button>
                        <p>First Name</p>
                        <input className="form-control" />
                        <p>Last Name</p>
                        <input className="form-control" />
                        <p>Email Address</p>
                        <input className="form-control" />
                        <p>Password</p>
                        <input className="form-control" />
                        <button className="btn btn-primary">
                           It's go time!
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <div className="card-body bg-secondary">
                        <h2 className="card-title">Welcome Back!</h2>
                        <button className="btn btn-primary">Sign in</button>
                        <p>Email Address</p>
                        <input className="form-control" />
                        <p>Password</p>
                        <input className="form-control" />
                        <button className="btn btn-primary">Log in</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
