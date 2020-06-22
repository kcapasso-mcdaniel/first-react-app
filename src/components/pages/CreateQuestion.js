import React from "react";
import Navigation from "../ui/Navigation";
import CreateQuestion from "../ui/CreateQuestion";

export default function CreateTheQuestion() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <Navigation />
               <CreateQuestion />
            </div>
         </div>
      </div>
   );
}
