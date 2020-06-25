import React from "react";
import { Link } from "react-router-dom";

export default class CreateQuestion extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isAnswerInputDisplayed: false,
         answerInputs: [],
      };
   }

   addAnswer(i) {
      const answerInputs = this.state.answerInputs;
      answerInputs.push(i);
      this.setState({ answerInputs: answerInputs });
   }

   eachAnswer() {
      return (
         <>
            <div className={"form-group row"}>
               <label htmlFor="answer" className="col-sm-2 col-form-label ml-2">
                  Answer
               </label>
               <div className="col-sm-10">
                  <input type="text" className="form-control" id="answer" />
               </div>
               <button className="btn btn-warning">Delete</button>
            </div>
         </>
      );
   }

   render() {
      return (
         <>
            <div className="form-group">
               <label htmlFor="formGroupExampleInput">Question</label>
               <input type="text" className="form-control" id="question" />
            </div>
            <div className="form-group row">
               <label htmlFor="answer" className="col-sm-2 col-form-label ml-2">
                  Answer
               </label>
               <div className="col-sm-10">
                  <input type="text" className="form-control" id="answer" />
               </div>
               <button className="btn btn-warning">Delete</button>
            </div>
            {this.state.answerInputs.map(this.eachAnswer)}
            <button
               type="buttons"
               className="btn-success btn-lg ml-3"
               onClick={() => {
                  this.addAnswer();
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
               to="created-question-list"
               type="submit"
               className="btn-lg py-3 ml-3 btn-primary"
            >
               Save
            </Link>
         </>
      );
   }
}
