import React from "react";

export default class Question extends React.Component {
   render() {
      const props = this.props;
      return (
         <div className="col-12">
            {/* rendering the title of the question on the page */}
            <h4 className="d-inline">{props.title}</h4>

            {/* iterating over the data and rendering the answers on the page */}
            {props.answers.map((answer) => (
               <div className="custom-control custom-radio" key={answer.id}>
                  <input
                     type="radio"
                     name={props.id}
                     id={answer.id}
                     className="custom-control-input"
                  />
                  <label className="custom-control-label" htmlFor={answer.id}>
                     {answer.text}
                  </label>
               </div>
            ))}
         </div>
      );
   }
}
