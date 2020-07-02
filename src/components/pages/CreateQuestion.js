import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";
import Answer from "../ui/Answer";
import Question from "../ui/Question";

export default class CreateQuestion extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         addAnswerInput: [],
         isAnswerDisplayed: true,
      };
   }

   // function renders a new answer input on the page
   addNewAnswer(i) {
      const addAnswerInput = [...this.state.addAnswerInput];
      addAnswerInput.push(i);
      this.setState({ addAnswerInput: addAnswerInput });
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
                        id="question"
                     />
                  </div>

                  {/* <div className={"form-group row"}>
                     <label
                        htmlFor="answer"
                        className="col-sm-2 col-form-label ml-2"
                     >
                        Answer
                     </label>
                     <div className="col-sm-10">
                        <input
                           type="text"
                           className="form-control"
                           id="answer"
                        />
                     </div>
                     <button
                        className="btn btn-warning"
                        type="button"
                        id="delete-answer"
                     >
                        Delete
                     </button>
                  </div> */}
                  {/* state to add an answer input when add answer button is clicked */}
                  {this.state.addAnswerInput.map((answer, i) => (
                     <Answer key={`answer-${i}`} index={i} />
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
                  <Link
                     to="question-summary"
                     type="submit"
                     className="btn-lg py-3 ml-3 btn-primary"
                  >
                     Save
                  </Link>
               </div>
            </div>
         </div>
      );
   }
}
