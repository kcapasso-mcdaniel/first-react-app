import React from "react";
import Navigation from "../ui/Navigation";
import UserQuestions from "../ui/UserQuestions";

export default function UserReports() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <Navigation />
               <h3>User Search</h3>
               <select className="custom-select custom-select-lg mb-3">
                  <option defaultValue>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
               </select>
               <div className="card">
                  <div className="card-body">
                     <h5 className="card-title">User Report</h5>
                     <ul className="card-text">
                        <li>Questions Assigned: 4</li>
                        <li>Questions Answered: 4</li>
                        <li>Questions Correct: 4</li>
                        <li>Questions Incorrect: 0</li>
                     </ul>
                     <UserQuestions />
                     <UserQuestions />
                     <UserQuestions />
                     <UserQuestions />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
