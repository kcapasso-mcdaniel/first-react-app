import React from "react";
import Navigation from "../ui/Navigation";
import { Link } from "react-router-dom";
import Question from "../ui/Question";
import questions from "../../data/questions";
const question = questions[1];
console.log(question);

export default function UserAssignedQuestions() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12">
               <Navigation />

               {questions.map((question) => {
                  return <Question title={question.title} key={question.id} />;
               })}

               <Link to="create-question" className="btn btn-outline-primary">
                  Create new question
               </Link>
               <button className="btn-lg btn-primary float-right">Save</button>
            </div>
         </div>
      </div>
   );
}
