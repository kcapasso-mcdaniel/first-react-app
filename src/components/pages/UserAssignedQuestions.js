import React from "react";
import Navigation from "../ui/Navigation";
import UserQuestion from "../ui/UserQuestions";

export default function UserAssignedQuestions() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <Navigation />
               <UserQuestion />
               <UserQuestion />
               <UserQuestion />
               <UserQuestion />
               <button className="btn-lg btn-primary mt-4 ml-4">Submit</button>
            </div>
         </div>
      </div>
   );
}
