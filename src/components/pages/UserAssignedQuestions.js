import React from "react";
import Navigation from "../ui/Navigation";
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
                  return (
                     <Question
                        title={question.title}
                        answers={question.answers}
                        key={question.id}
                     />
                  );
               })}

               <button className="btn-lg btn-primary mt-4 ml-4">Submit</button>
            </div>
         </div>
      </div>
   );
}
