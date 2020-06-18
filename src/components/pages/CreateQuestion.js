import React from "react";
import Navigation from "../pages/ui/Navigation";
import QuestionTemplate from "../pages/ui/QuestionTemplate";

export default function CreateQuestion() {
   return (
      <div classNameName="container">
         <div className="row">
            <div className="col-12">
               <h1>Create Question</h1>
               <Navigation />
               <QuestionTemplate />
            </div>
         </div>
      </div>
   );
}
