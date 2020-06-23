import React from "react";
import checkIcon from "../../icons/landing-check.svg";
import SignUp from "../ui/SignUp";
import LogIn from "../ui/LogIn";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container-fluid">
            <div className="row">
               <div className="col-12">
                  <h1 className="d-inline">Knowledge</h1>
                  <img
                     src={checkIcon}
                     alt=""
                     style={{ marginLeft: "4px", marginBottom: "6px" }}
                  />
               </div>
               <SignUp />
               <LogIn />
            </div>
         </div>
      </div>
   );
}
