import React from "react";
import checkIcon from "../../icons/Check2 -square.svg";
import { Link } from "react-router-dom";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container-fluid">
            <div className="row">
               <div className="col-6">
                  <h1 className="d-inline ml-4">Knowledge</h1>
                  <img
                     src={checkIcon}
                     alt=""
                     style={{ marginLeft: "4px", marginBottom: "6px" }}
                  />
               </div>
               <div className="col-8 offset-2 mt-4">
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
                        <Link
                           to="user-assigned-questions"
                           className="btn btn-primary"
                        >
                           Log in
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
