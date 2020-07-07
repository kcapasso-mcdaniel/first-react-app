import React from "react";
import Navigation from "../ui/Navigation";
import Question from "../ui/Question";
import questions from "../../data/questions";
import axios from "axios";
import actions from "../../store/actions";
import { connect } from "react-redux";

// quiz function for each user input compare to the correct answer and return true or false
// on click Submit - submit the form for the quiz and log and object with the user and the answers

class AssignedToMe extends React.Component {
   constructor(props) {
      super(props);
      // this.state = {
      //    userAnswerInput: ,
      //    correctAnswer: "" ,
      //    userAnswer: "",
      // };

      axios
         .get(
            "https://raw.githubusercontent.com/kcapasso-mcdaniel/first-react-app/master/src/data/questions.json"
         )
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_QUESTIONS,
               payload: res.data,
            });
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
                  <div className="col-12">
                     <form className="mt-8">
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
                           // onClick = check for correct answers and submit answers
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

function mapStateToProps(state) {
   return {
      questions: state.questions,
   };
}

export default connect(mapStateToProps)(AssignedToMe);
