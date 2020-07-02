import React from "react";
import { Link } from "react-router-dom";
import headerIcon from "../../icons/header-check.svg";

export default function Navigation() {
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
            <Link to="/assigned-questions" type="button" className="btn">
               Assigned Questions
            </Link>
            <Link
               to="/create-question"
               type="button"
               className="btn tab-separator"
            >
               Create Question
            </Link>
            <Link
               to="/question-summary"
               type="button"
               className="btn tab-separator"
            >
               Created Question Summary
            </Link>
            <Link
               to="/user-reports"
               type="button"
               className="btn tab-separator"
            >
               Reports
            </Link>
            <Link to="/" type="button" className="btn tab-separator">
               Log Out
            </Link>
         </div>
      </>
   );
}
