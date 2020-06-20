import React from "react";
import Navigation from "../ui/Navigation";
import QuestionTemplate from "../ui/QuestionTemplate";

export default function CreateQuestion() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <Navigation />
               <QuestionTemplate />
            </div>
         </div>
      </div>
   );
}
