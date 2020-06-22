import React from "react";
import Navigation from "../ui/Navigation";

export default function UserReports() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <Navigation />
               <h3>User Search</h3>
               <input className="mb-3 py-2 w-100"></input>
               <div className="card">
                  <div className="card-body">
                     <h5 className="card-title">User Report</h5>
                     <ul className="card-text">
                        <li>Questions Assigned: 4</li>
                        <li>Questions Answered: 4</li>
                        <li>Questions Correct: 4</li>
                        <li>Questions Incorrect: 0</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
