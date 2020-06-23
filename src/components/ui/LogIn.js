import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
   return (
      <div className="col-xl-5 col-sm-6 col-12 mb-6">
         <div className="card">
            <div className="card-body">
               <h2 className="card-title">Welcome Back!</h2>
               <label htmlFor="login-user-email-input">Email Address</label>
               <input
                  type="email"
                  className="form-control"
                  id="login-user-email-input"
               />
               <label htmlFor="login-user-password-input">Password</label>
               <input
                  type="password"
                  className="form-control"
                  id="login-user-password-input"
               />
               <Link
                  type="submit"
                  to="user-assigned-questions"
                  className="form-control btn btn-primary mt-2"
               >
                  Log in
               </Link>
               <button
                  type="button"
                  className="form-control btn btn-primary mt-2"
               >
                  Sign in
               </button>
            </div>
         </div>
      </div>
   );
}
