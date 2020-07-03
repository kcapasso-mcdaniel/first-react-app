import React from "react";
import Navigation from "../ui/Navigation";
import caretDownIcon from "../../icons/caret-down.svg";
import caretRightIcon from "../../icons/caret-right.svg";

class UserAssignments extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showAssignedQuestions: false,
         hideRightCaret: true,
         hideDownCaret: false,
      };
   }

   toggleAssignedQuestions() {
      // click on right caret - hides right caret shows down caret and questions

      this.setState({
         showAssignedQuestions: !this.state.showAssignedQuestions,
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

                        <h3 className="d-inline">User</h3>

                        {this.state.showAssignedQuestions && (
                           <>
                              <ul className="card-text">
                                 <li>Question Title</li>
                                 <li>Question Title</li>
                                 <li>Question Title</li>
                                 <li>Question Title</li>
                              </ul>
                           </>
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
