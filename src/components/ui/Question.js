import React from "react";
import questions from "../../data/questions";

export default class Question extends React.Component {
   render() {
      const props = this.props;
      return (
         <div className="col-12">
            {/* rendering the title of the question on the page */}
            <h4 className="d-inline" key={questions.id}>
               {props.title}
            </h4>

            {/* iterating over the data and rendering the answers on the page */}
            {props.answers.map((answer) => (
               <div className="custom-control custom-radio" key={answer.id}>
                  <input
                     type="radio"
                     name={answer.text}
                     id={answer.text}
                     className="custom-control-input"
                  />
                  <label className="custom-control-label" htmlFor={answer.text}>
                     {answer.text}
                  </label>
               </div>
            ))}
         </div>
      );
   }
}
