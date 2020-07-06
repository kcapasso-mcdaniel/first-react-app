import React from "react";
import userReport from "../../data/user-report";

class UserReport extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         userReport: userReport,
      };
   }
   render() {
      const newUserReport = [...this.state.userReport];
      console.log(newUserReport);
      const props = this.props;
      console.log("question", props.title);
      return (
         <div className="col-12">
            <h3 className="d-inline">{props.firstName}</h3>
            <h3 className="d-inline">{props.lastName}</h3>
            {/* rendering the title of the question on the page */}
            <h3 className="d-inline">{props.title}</h3>
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

export default UserReport;
