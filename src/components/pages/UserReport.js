import React from "react";
import Navigation from "../ui/Navigation";
import caretDownIcon from "../../icons/caret-down.svg";
import caretRightIcon from "../../icons/caret-right.svg";
import UserQuestions from "../ui/UserQuestions";
import userQuestions from "../../data/user-questions";

// populate the questions assigned to the user
// show the user Answers selected

class UserReport extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showUserReport: false,
         hideRightCaret: true,
         hideDownCaret: false,
         userQuestions: userQuestions,
      };
   }

   toggleAssignedQuestions() {
      // click on right caret - hides right caret shows down caret and questions

      this.setState({
         showUserReport: !this.state.showUserReport,
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
                  <input className="form-control mb-4" type="text"></input>
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

                        {this.state.showUserReport && (
                           <form className="mt-2">
                              {userQuestions.map((user) => {
                                 return (
                                    <div key={user}>
                                       <h3>{user.firstName} </h3>
                                       <h3>{user.lastName}</h3>
                                       <ul>
                                          <UserQuestions
                                             questions={user.questions}
                                             key={user.id}
                                          />
                                       </ul>
                                    </div>
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

export default UserReport;
