import React from "react";

export default class Answer extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         isAnswerShowing: true,
      };
   }

   // delete the input on the page
   deleteAnswer() {
      this.setState({ isAnswerShowing: !this.state.isAnswerShowing });
   }
   render() {
      return (
         <>
            {this.state.isAnswerShowing && (
               <div className="form-group row">
                  <label
                     htmlFor="answer-input"
                     className="col-sm-2 col-form-label ml-2"
                  >
                     Answer
                  </label>
                  <div className="col-sm-10">
                     <input
                        type="text"
                        name="answer-input"
                        className="form-control"
                        id="answer-input"
                     />
                  </div>

                  <button
                     className="btn btn-warning"
                     type="button"
                     id="delete-answer"
                     onClick={() => this.deleteAnswer(this.props.index)}
                  >
                     Delete
                  </button>
               </div>
            )}
         </>
      );
   }
}
