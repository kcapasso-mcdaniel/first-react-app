import React from "react";
import Navigation from "../ui/Navigation";
import caretDownIcon from "../../icons/caret-down.svg";
import caretRightIcon from "../../icons/caret-right.svg";
import questions from "../../data/questions";
import UserReport from "../ui/UserReport";

class UserAssignments extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showReport: false,
         hideRightCaret: true,
         hideDownCaret: false,
      };
   }

   toggleAssignedQuestions() {
      // click on right caret - hides right caret shows down caret and questions

      this.setState({
         showReport: !this.state.showReport,
         hideRightCaret: !this.state.hideRightCaret,
         hideDownCaret: !this.state.hideDownCaret,
      });
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Navigation />
                  <div className="card">
                     <div className="card-body">
                        {/* toggle when click icon next to user show assigned questions */}

                        {this.state.hideRightCaret && (
                           <img
                              src={caretRightIcon}
                              style={{}}
                              alt=""
                              onClick={() => {
                                 this.toggleAssignedQuestions();
                              }}
                           />
                        )}

                        {this.state.hideDownCaret && (
                           <img
                              src={caretDownIcon}
                              style={{}}
                              alt=""
                              onClick={() => {
                                 this.toggleAssignedQuestions();
                              }}
                           />
                        )}

                        <h3 className="d-inline">User Report</h3>

                        {this.state.showReport && (
                           <form className="mt-8">
                              <h4>First Name</h4>
                              <h4>Last Name</h4>
                              {questions.map((question) => {
                                 return (
                                    <UserReport
                                       title={question.title}
                                       answers={question.answers}
                                       key={question.id}
                                       id={question.id}
                                    />
                                 );
                              })}
                           </form>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default UserAssignments;
