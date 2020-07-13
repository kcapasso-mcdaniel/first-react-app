import React from "react";
import { Link } from "react-router-dom";
import headerIcon from "../../icons/header-check.svg";
import { connect } from "react-redux";
import actions from "../../store/actions";

class Navigation extends React.Component {
   logOutCurrentUser() {
      this.props.dispatch({ type: actions.UPDATE_CURRENT_USER, payload: {} });
   }

   render() {
      return (
         <>
            <div className="col-12 offset-4">
               <h2 className="d-inline ml-2 mb-2">Knowledge</h2>
               <img
                  src={headerIcon}
                  alt=""
                  style={{ marginLeft: "6px", marginBottom: "6px" }}
               />
            </div>
            <div
               className="btn-group d-flex mt-1 mb-5"
               role="navigation"
               aria-label="navigation"
            >
               <Link to="/assign-question" type="button" className="btn">
                  Assign Question
               </Link>
               <Link
                  to="/create-question"
                  type="button"
                  className="btn tab-separator"
               >
                  Create Question
               </Link>
               <Link
                  to="/user-report"
                  type="button"
                  className="btn tab-separator"
               >
                  User Report
               </Link>
               <Link
                  to="/assigned-to-me"
                  type="button"
                  className="btn tab-separator"
               >
                  Assigned To Me
               </Link>
               <Link
                  to="/"
                  type="button"
                  className="btn tab-separator"
                  onClick={() => {
                     this.logOutCurrentUser();
                  }}
               >
                  Log Out
               </Link>
            </div>
         </>
      );
   }
}
function mapStateToProps(state) {
   return {};
}

export default connect(mapStateToProps)(Navigation);
