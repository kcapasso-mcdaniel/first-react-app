import React from "react";
import Navigation from "../ui/Navigation";
import Question from "../ui/Question";
import questions from "../../data/questions";

export default class UserAssignedQuestions extends React.Component {
   constructor() {
      super();
      console.log(questions);
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Navigation />
                  <h4 className="mb-4">
                     Please complete the quiz below. There is one correct answer
                     for each question.
                  </h4>
                  <div className="col-12">
                     <form>
                        {questions.map((question) => {
                           return (
                              <Question
                                 title={question.title}
                                 answers={question.answers}
                                 key={question.id}
                              />
                           );
                        })}

                        <button
                           type="submit"
                           className="btn-lg btn-primary mt-4 ml-4"
                        >
                           Submit
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
