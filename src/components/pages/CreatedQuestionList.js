import React from "react";
import Navigation from "../ui/Navigation";
import QuestionList from "../ui/QuestionList";

export default function CreatedQuestionList() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <h1>Created Question List</h1>
               <Navigation />
               <QuestionList />
               <QuestionList />
               <QuestionList />
               <QuestionList />
               <div className="float-right">
                  <select className="custom-select" style={{ width: "500px" }}>
                     <option defaultValue>Select User</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
               </div>
            </div>
         </div>
      </div>
   );
}
