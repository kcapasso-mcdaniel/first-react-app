import React from "react";

class Question extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      const props = this.props;
      return (
         <div className="col-12">
            {/* rendering the title of the question on the page */}
            <h3 className="d-inlinw">{props.title}</h3>
            <div className="d-inline float-right">
               <select
                  className="form-control-lg"
                  id="assignment-input"
                  name="user-assignment"
               >
                  <option value="">--Assign question--</option>
                  <option value="user-name">--Admin User Name--</option>
               </select>
               <button className="btn-lg btn-primary ml-6">Edit</button>
            </div>
            {/* iterating over the data and rendering the answers on the page */}
            {props.answers.map((answer) => (
               <div
                  className="custom-control custom-radio mt-2"
                  key={answer.id}
               >
                  <input
                     type="radio"
                     name={props.id}
                     id={answer.id}
                     className="custom-control-input"
                  />
                  <label
                     className="custom-control-label mb-4"
                     htmlFor={answer.id}
                  >
                     {answer.text}
                  </label>
               </div>
            ))}
         </div>
      );
   }
}

export default Question;
