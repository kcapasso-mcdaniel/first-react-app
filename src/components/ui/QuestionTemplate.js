import React from "react";
import { Link } from "react-router-dom";

export default function QuestionTemplate() {
   return (
      <>
         <div className="form-group">
            <label htmlFor="formGroupExampleInput">Question</label>
            <input type="text" className="form-control" id="question" />
         </div>
         <div className="form-group row">
            <label
               htmlFor="colFormLabel"
               className="col-sm-2 col-form-label ml-2"
            >
               Answer
            </label>
            <div className="col-sm-10">
               <input type="email" className="form-control" />
            </div>
            <button className="btn btn-warning">Clear</button>
         </div>
         <div className="form-group row">
            <label
               htmlFor="colFormLabel"
               className="col-sm-2 col-form-label ml-2"
            >
               Answer
            </label>
            <div className="col-sm-10">
               <input type="email" className="form-control" />
            </div>
            <button className="btn btn-warning">Clear</button>
         </div>
         <div className="form-group row">
            <label
               htmlFor="colFormLabel"
               className="col-sm-2 col-form-label ml-2"
            >
               Answer
            </label>
            <div className="col-sm-10">
               <input type="email" className="form-control" />
            </div>
            <button className="btn btn-warning">Clear</button>
         </div>
         <div className="form-group row">
            <label
               htmlFor="colFormLabel"
               className="col-sm-2 col-form-label ml-2"
            >
               Answer
            </label>
            <div className="col-sm-10">
               <input type="email" className="form-control" />
            </div>
            <button className="btn btn-warning">Clear</button>
         </div>
         <button className="btn-success btn-lg">Add answer</button>
         {/* this would refresh the page */}
         <button className="btn-dark btn-lg">Delete Question</button>
         {/* this would also refresh the page */}
         <Link
            to="created-question-list"
            className="btn-lg py-3 ml-3 btn-primary"
         >
            Save
         </Link>
      </>
   );
}
