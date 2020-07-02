import React from "react";
import Navigation from "../ui/Navigation";
import Question from "../ui/Question";
import questions from "../../data/questions";
import axios from "axios";

class QuestionSummary extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/kcapasso-mcdaniel/first-react-app/master/src/data/questions.json"
         )
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

                  {questions.map((question) => {
                     return (
                        <Question
                           title={question.title}
                           answers={question.answers}
                           key={question.id}
                           id={question.id}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      );
   }
}

export default QuestionSummary;
