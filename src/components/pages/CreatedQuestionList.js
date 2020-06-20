import React from "react";
import Navigation from "../ui/Navigation";
import QuestionList from "../ui/QuestionList";
import { Link } from "react-router-dom";

export default function CreatedQuestionList() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <Navigation />
               <QuestionList />
               <QuestionList />
               <QuestionList />
               <QuestionList />
               <Link to="create-question" className="btn btn-outline-primary">
                  Create new question
               </Link>
               <button className="btn-lg btn-primary float-right">Save</button>
            </div>
         </div>
      </div>
   );
}
