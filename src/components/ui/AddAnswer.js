import React from "react";

//

export default class AddAnswer extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         addNewAnswer: true,
      };
   }

   saveAnswer() {
      // get the text from the input
      // create an id for this answer
      // add answer to the answers array inside of this.state.question
   }

   // delete the input on the page
   deleteAnswer() {
      // remove current answer from the state of answerInputs
      // use pull possibly
      this.setState({ addNewAnswer: !this.state.addNewAnswer });
   }
   render() {
      return (
         <>
            {this.state.addNewAnswer && (
               <div className="row">
                  <div className="col-sm-2">
                     <label htmlFor="answer-input" className="col-form-label">
                        Answer
                     </label>
                  </div>
                  <div className="col-sm-6">
                     <input
                        type="text"
                        name="answer-input"
                        className="form-control"
                        id="answer-input"
                     />
                  </div>
                  <div className="col-sm-2">
                     <button
                        className="btn btn-primary btn-block"
                        type="button"
                        id="save-answer"
                        onClick={() => this.saveAnswer()}
                     >
                        Save
                     </button>
                  </div>
                  <div className="col-sm-2">
                     <button
                        className="btn btn-warning btn-block"
                        type="button"
                        id="delete-answer"
                        onClick={() => this.deleteAnswer()}
                     >
                        Delete
                     </button>
                  </div>
               </div>
            )}
         </>
      );
   }
}
