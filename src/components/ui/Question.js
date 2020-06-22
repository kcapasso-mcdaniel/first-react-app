import React from "react";

export default class Question extends React.Component {
   render() {
      const props = this.props;
      return (
         <div className="col-12">
            <h4 className="d-inline">{props.title}</h4>

            {props.answers.map((answer) => (
               <div className="custom-control custom-radio">
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
