import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";
import AddAnswer from "../ui/AddAnswer";
import Question from "../ui/Question";

export default class CreateQuestion extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         addAnswerInput: [],
         isAnswerDisplayed: true,
         questionInput: "",
         answerInput: "",
      };
   }

   // function renders a new answer input on the page
   addNewAnswer(i) {
      const addAnswerInput = [...this.state.addAnswerInput];
      addAnswerInput.push(i);
      this.setState({ addAnswerInput: addAnswerInput });
   }

   // create a question funcion  - need the value and id of question input, value and id of each answer input
   // const questionInput = document.getElementById("question-input").value
   // const answerInput = document.getElementById("answer-input").value
   CreateQuestion() {
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

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Navigation />
                  <div className="form-group" key={Question.id}>
                     <label htmlFor="formGroupExampleInput">Question</label>
                     <input
                        type="text"
                        className="form-control"
                        id="question-input"
                     />
                  </div>

                  {/* state to add an answer input when add answer button is clicked */}
                  {this.state.addAnswerInput.map((answer, i) => (
                     <AddAnswer
                        key={`answer-${i}`}
                        index={i}
                        name="answer-input"
                     />
                  ))}
                  <button
                     type="buttons"
                     className="btn-success btn-lg ml-3"
                     onClick={() => {
                        this.addNewAnswer();
                     }}
                  >
                     Add answer
                  </button>
                  {/* this would refresh the page */}
                  <Link
                     to="/create-question"
                     type="reset"
                     className="btn-lg btn-warning py-3 ml-3"
                  >
                     Delete Question
                  </Link>
                  {/* this would also refresh the page */}
                  <button
                     type="submit"
                     className="btn-lg py-3 ml-3 btn-primary"
                     onClick={() => {
                        this.CreateQuestion();
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
