import React from "react";
import Navigation from "../ui/Navigation";
import AddAnswer from "../ui/AddAnswer";
// import Question from "../ui/Question";
import { withRouter } from "react-router-dom";
import { v4 as getUuid } from "uuid";
import { connect } from "react-redux";
import cloneDeep from "lodash/cloneDeep";

// edit question populated on page from AssignQuestion
// for each answer created generate a new id for the answer
// on click save log an object with the question and each answer
// on click delete question refresh the page and clear the inputs

class CreateQuestion extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         numOfAnswers: 0,
         isAnswerDisplayed: true,
         question: {
            id: getUuid(),
            createdByUserId: this.props.currentUser.id,
            title: "", // update when user types into title input
            correctAnswerId: "", //update when user selects correct answer
            answers: [],
            assignees: [],
         },
         answerFields: [],
      };
   }

   // create a question function  - need the value and id of question input, value and id of each answer input
   createQuestion() {
      const questionInput = document.getElementById("question-input").value;
      console.log("Question", questionInput);
      const answerInput = document.getElementById("answer-input").value;
      console.log("Answer", answerInput);
      const newQuestion = {
         question: questionInput,
         answer: answerInput,
      };
      console.log(newQuestion);
   }

   deleteThisAnswer() {
      console.log("answer deleted");
   }

   setAnswerId() {
      const question = cloneDeep(this.state.question);
      const answerId = getUuid();
      const answer = { id: answerId };
      question.answers.push(answer);
      // updating question state
      this.setState({ question });
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Navigation />
                  <div className="form-group">
                     <label htmlFor="formGroupExampleInput">Question</label>
                     <input
                        type="text"
                        className="form-control"
                        id="question-input"
                     />
                  </div>

                  {/* change to Answer */}
                  {this.state.question.answers.map((answer) => {
                     return <AddAnswer key={answer.id} id={answer.id} />;
                  })}
                  <button
                     type="button"
                     className="btn-success btn-lg ml-3"
                     onClick={() => {
                        this.setAnswerId();
                     }}
                  >
                     Add answer
                  </button>
                  {/* this would refresh the page */}
                  <button
                     type="button"
                     className="btn-lg btn-warning py-3 ml-3"
                     // onClick={() => {
                     //    this.deleteTheQuestion();
                     // }}
                  >
                     Delete Question
                  </button>
                  {/* this would also refresh the page */}
                  <button
                     type="submit"
                     className="btn-lg py-3 ml-3 btn-primary"
                     onClick={() => {
                        this.createQuestion();
                     }}
                  >
                     Save
                  </button>
               </div>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      currentUser: state.currentUser,
   };
}

export default withRouter(connect(mapStateToProps)(CreateQuestion));
