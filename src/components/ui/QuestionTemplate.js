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
               <input type="answerOutput" className="form-control" />
            </div>
            <button className="btn btn-warning">Delete</button>
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
            <button className="btn btn-warning">Delete</button>
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
            <button className="btn btn-warning">Delete</button>
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
            <button className="btn btn-warning">Delete</button>
         </div>
         <button className="btn-success btn-lg ml-3">Add answer</button>
         {/* this would refresh the page */}
         <Link to="/create-question" className="btn-lg btn-warning py-3 ml-3">
            Delete Question
         </Link>
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
