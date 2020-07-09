import React from "react";
import Navigation from "../ui/Navigation";
import Question from "../ui/Question";
import userQuestions from "../../data/user-questions";
import find from "lodash/find";
import axios from "axios";
import actions from "../../store/actions";
import { connect } from "react-redux";

// quiz function for each user input compare to the correct answer and return true or false
// on click Submit - submit the form for the quiz and log and object with the user and the answers
// use userquestions and change how it sent to the question component

class AssignedToMe extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         currentUser: userQuestions[0],
      };
      this.setUserAnswer = this.setUserAnswer.bind(this);

      axios
         .get(
            "https://raw.githubusercontent.com/kcapasso-mcdaniel/first-react-app/master/src/data/user-questions.json"
         )
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_USER_QUESTIONS,
               payload: res.data,
            });
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }

   submitUserAnswers() {
      console.log(this.state.currentUser);
   }

   // Function finds the id of the question and returns the user's answer associated with that question id
   // Lodash find() method is used to itterate over the collection of data and return the first element of the object that is truthy
   setUserAnswer(e) {
      console.log("test", e.target.value);
      const questionId = e.target.name;
      const answerId = e.target.id;
      const user = { ...this.state.currentUser };

      // filter the questions checking the question id to the name props.id
      // const filteredQuestions = user.questions.filter((question) => {
      //    return question.id === questionId;
      // });

      // // c
      // const question = filteredQuestions[0];
      // console.log("test", question);

      // user.questions is the collection, the function is being invoked on the question
      const question = find(user.questions, (question) => {
         return question.id === questionId;
      });
      console.log("found", question);

      question.userAnswerId = answerId;
      console.log("answer", question);

      const indexOfQuestion = user.questions.findIndex((question) => {
         return question.id === questionId;
      });
      user.questions[indexOfQuestion].userAnswerId = answerId;
      this.setState({ currentUser: user });
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Navigation />
                  <div className="col-12">
                     <form className="mt-8">
                        {this.state.currentUser.questions.map((question) => {
                           // console.log(question.id, question.title);
                           return (
                              <Question
                                 title={question.title}
                                 answers={question.answers}
                                 key={question.id}
                                 id={question.id}
                                 setUserAnswer={this.setUserAnswer}
                              />
                           );
                        })}

                        <button
                           type="submit"
                           className="btn-lg btn-primary mt-4 ml-4"
                           onClick={() => {
                              this.submitUserAnswers();
                           }}
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
      userQuestions: state.userQuestions,
   };
}
export default connect(mapStateToProps)(AssignedToMe);

// _.find(users, function(o) => {
// return o.age < 40;
// });
