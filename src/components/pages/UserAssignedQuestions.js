import React from "react";
import Navigation from "../ui/Navigation";
import Question from "../ui/Question";
import questions from "../../data/questions";
import axios from "axios";

export default class UserAssignedQuestions extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/a70a0ab3-8fa7-42b5-bf28-2be34c41bfbb")
         .then(function (response) {
            // handle success
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
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
                           // console.log(question.id, question.title);
                           return (
                              <Question
                                 title={question.title}
                                 answers={question.answers}
                                 key={question.id}
                                 id={question.id}
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
