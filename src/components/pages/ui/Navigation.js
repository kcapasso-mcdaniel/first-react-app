import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
   return (
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
   );
}
