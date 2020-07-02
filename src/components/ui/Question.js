import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class Question extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/kcapasso-mcdaniel/first-react-app/master/src/data/questions.json"
         )
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_QUESTIONS,
               payload: res.data,
            });
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }
   render() {
      const props = this.props;
      return (
         <div className="col-12">
            {/* rendering the title of the question on the page */}
            <h4 className="d-inline">{props.title}</h4>
            <button className="btn btn-outline-primary float-right">
               Edit
            </button>

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

// Global State

function mapStateToProps() {
   return {};
}

// take the global state and map certain props to component in local state
export default connect(mapStateToProps)(Question);
