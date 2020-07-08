import React from "react";
import Navigation from "../ui/Navigation";
import Question from "../ui/Question";
import userQuestions from "../../data/user-questions";
import find from "lodash/find";

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
   }

   submitUserAnswers() {
      console.log(this.state.currentUser);
   }

   // Function finds the id of the question and returns the user's answer associated with that question id
   // Lodash find() method is used to itterate over the collection of data and return the first
   setUserAnswer(e) {
      console.log("test", e.target.value);
      const questionId = e.target.name;
      const answerId = e.target.id;
      const user = { ...this.state.currentUser };

      // const filteredQuestions = user.questions.filter((question) => {
      //    return question.id === questionId;
      // });

      // const question = filteredQuestions[0];
      // console.log("test", question);

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

export default AssignedToMe;
