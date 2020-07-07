import React from "react";
import Navigation from "../ui/Navigation";
import Question from "../ui/Question";
import questions from "../../data/questions";
import axios from "axios";
import actions from "../../store/actions";
import { connect } from "react-redux";

class AssignQuestion extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         questions: [],
      };
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
      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Navigation />
                  <div className="row">
                     <div className="col-12">
                        {questions.map((question) => {
                           return (
                              <>
                                 <Question
                                    title={question.title}
                                    answers={question.answers}
                                    key={question.id}
                                    id={question.id}
                                 />
                                 <div className="row">
                                    <div className="col-8 mb-4">
                                       <input className="w-50 mt-4"></input>

                                       <button className="btn-sm mt-2 ml-4">
                                          Assign
                                       </button>

                                       <button className="btn-sm mt-2 ml-4">
                                          Edit
                                       </button>
                                    </div>
                                 </div>
                              </>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      questions: state.questions,
   };
}

export default connect(mapStateToProps)(AssignQuestion);
