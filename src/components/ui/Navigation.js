import React from "react";
import { Link } from "react-router-dom";
import headerIcon from "../../icons/header-check.svg";

export default function Navigation() {
   return (
      <>
         <h2 className="d-inline">Knowledge Check</h2>
         <img
            src={headerIcon}
            alt=""
            style={{ marginLeft: "6px", marginBottom: "6px" }}
         />
         <button type="button" className="btn-link mt-2 float-right">
            Log out
         </button>
         <div
            className="btn-group d-flex mt-1 mb-5"
            role="navigation"
            aria-label="navigation"
         >
            <Link
               to="/user-assigned-questions"
               type="button"
               className="btn btn-primary"
            >
               Assigned to me
            </Link>
            <Link
               to="/created-question-list"
               type="button"
               className="btn btn-primary tab-separator"
            >
               Created by me
            </Link>
            <Link
               to="/user-reports"
               type="button"
               className="btn btn-primary tab-separator"
            >
               Reports
            </Link>
         </div>
      </>
   );
}
