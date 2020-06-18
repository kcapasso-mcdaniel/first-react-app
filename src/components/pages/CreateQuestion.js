import React from "react";
import Navigation from "../ui/Navigation";
import QuestionTemplate from "../ui/QuestionTemplate";

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
