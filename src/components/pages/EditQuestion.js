import React from "react";
import Navigation from "../ui/Navigation";
import Answer from "../ui/Answer";
// import Question from "../ui/Question";
import { withRouter } from "react-router-dom";
import { v4 as getUuid } from "uuid";
import { connect } from "react-redux";
import cloneDeep from "lodash/cloneDeep";
import axios from "axios";
import actions from "../../store/actions";
import Question from "../ui/Question";

// edit question populated on page from AssignQuestion
// for each answer created generate a new id for the answer
// on click save log an object with the question and each answer
// on click delete question refresh the page and clear the inputs

class EditQuestion extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         numOfAnswers: 0,
         isAnswerDisplayed: true,
         questionToEdit: {},
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
      // pass function through children - this refer to create question
      this.setAnswerText = this.setAnswerText.bind(this);
   }

   componentDidMount() {
      // props object from react router - (match, history, and one more )
      // match is a way to grab the url and do something with it - params hold anything that you put with a (:) id (that's what we name it after the colan)
      const id = this.props.match.params.id;
      console.log("this is the id", id);
      axios
         .get(
            "https://raw.githubusercontent.com/kcapasso-mcdaniel/first-react-app/master/src/data/questions.json"
         )
         .then((res) => {
            // handle success
            console.log(res);
            const questions = res.data;
            console.log(res.data);
            const filteredQuestion = questions.filter((question) => {
               return question.id === id;
            });
            console.log("filter", filteredQuestion);
            const editableQuestion = filteredQuestion.map((question) => {
               return (
                  <Question
                     title={question.title}
                     answers={question.answers}
                     key={question.id}
                     id={question.id}
                  />
               );
            });
            console.log("edit", editableQuestion);
            this.props.dispatch({
               //dispatch actions takes type and payload
               type: actions.STORE_QUESTIONS,
               payload: questions,
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   // create a question function  - need the value and id of question input, value and id of each answer input
   createQuestion() {}

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

   setAnswerText(answerId, text) {
      const question = cloneDeep(this.state.question);
      const answer = question.answers.find((answer) => {
         return answer.id === answerId;
      });
      console.log(answer);
      answer.text = text;
      this.setState({ question });
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Navigation />
                  <div className="form-group">
                     <label htmlFor="form-control">Question</label>
                     <input
                        type="text"
                        className="form-control"
                        id="question-input"
                     />
                  </div>

                  <div className="col-sm-12">
                     <Answer />
                     <Answer />
                     <Answer />
                     <Answer />
                  </div>
                  {/* change to Answer */}
                  {this.state.question.answers.map((answer) => {
                     return (
                        <Answer
                           key={answer.id}
                           id={answer.id}
                           setAnswerText={this.setAnswerText}
                        />
                     );
                  })}
                  <div className="row">
                     <div className="col-sm-12">
                        <button
                           type="button"
                           className="btn-lg btn-success"
                           onClick={() => {
                              this.setAnswerId();
                           }}
                        >
                           Add Answer
                        </button>
                     </div>
                  </div>
                  <div className="row mt-4">
                     <div className="col-sm-6">
                        <button
                           type="button"
                           className="btn-lg btn-warning btn-block"
                           // onClick={() => {
                           //    this.deleteTheQuestion();
                           // }}
                        >
                           Delete Question
                        </button>
                     </div>
                     <div className="col-sm-6">
                        <button
                           type="button"
                           className="btn-lg btn-primary btn-block float-right"
                           onClick={() => {
                              this.createQuestion();
                           }}
                        >
                           Save Question
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      currentUser: state.currentUser,
      questions: state.questions,
   };
}

export default withRouter(connect(mapStateToProps)(EditQuestion));
