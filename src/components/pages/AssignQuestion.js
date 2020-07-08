import React from "react";
import Navigation from "../ui/Navigation";
import questions from "../../data/questions";
import { withRouter } from "react-router-dom";

// assign the question to a user

class AssignQuestion extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         questionsToAssign: questions, // use the questions data here because it is a general list of questions to be assigned
         clickedTheEditButton: false,
      };
   }

   // onClick Edit button - populate question on create-question page to edit
   editTheQuestion() {
      if (this.state.clickedTheEditButton === true) {
      }
      this.props.history.push("/create-question");
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Navigation />
                  <div className="row">
                     <div className="col-12 ml-6">
                        {this.state.questionsToAssign.map((question) => {
                           return (
                              <>
                                 <p key={question.id}>{question.title} </p>

                                 <div className="row">
                                    <div className="col-8 mb-4">
                                       <input className="w-50 mt-4"></input>

                                       <div className="col-2 d-inline">
                                          <button className="btn-sm btn-warning mt-2">
                                             Assign
                                          </button>
                                       </div>
                                       <div className="col-2 d-inline">
                                          <button
                                             className="btn-sm btn-danger mt-2"
                                             type="button"
                                             onClick={() => {
                                                this.editTheQuestion();
                                             }}
                                          >
                                             Edit
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </>
                           );
                        })}
                        <div className="col-6">
                           <button className="btn-lg btn-success mt-2">
                              Create New
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default withRouter(AssignQuestion);
