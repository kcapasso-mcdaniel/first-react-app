import React from "react";
import { Link } from "react-router-dom";

export default function CreateQuestion() {
   return (
      <>
         <div className="form-group">
            <label htmlFor="formGroupExampleInput">Question</label>
            <input type="text" className="form-control" id="question" />
         </div>
         <div className="form-group row">
            <label
               htmlFor="answer-text"
               className="col-sm-2 col-form-label ml-2"
            >
               Answer
            </label>
            <div className="col-sm-10">
               <input type="text" className="form-control" id="answer-text" />
            </div>
            <button className="btn btn-warning">Delete</button>
         </div>
         <div className="form-group row">
            <label
               htmlFor="answer-text"
               className="col-sm-2 col-form-label ml-2"
            >
               Answer
            </label>
            <div className="col-sm-10">
               <input type="text" className="form-control" id="answer-text" />
            </div>
            <button className="btn btn-warning">Delete</button>
         </div>
         <div className="form-group row">
            <label
               htmlFor="answer-text"
               className="col-sm-2 col-form-label ml-2"
            >
               Answer
            </label>
            <div className="col-sm-10">
               <input type="text" className="form-control" id="answer-text" />
            </div>
            <button className="btn btn-warning">Delete</button>
         </div>
         <div className="form-group row">
            <label
               htmlFor="answer-text"
               className="col-sm-2 col-form-label ml-2"
            >
               Answer
            </label>
            <div className="col-sm-10">
               <input type="text" className="form-control" id="answer-text" />
            </div>
            <button className="btn btn-warning">Delete</button>
         </div>
         <button type="buttons" className="btn-success btn-lg ml-3">
            Add answer
         </button>
         {/* this would refresh the page */}
         <Link
            to="/create-question"
            type="reset"
            className="btn-lg btn-warning py-3 ml-3"
         >
            Delete Question
         </Link>
         {/* this would also refresh the page */}
         <Link
            to="created-question-list"
            type="submit"
            className="btn-lg py-3 ml-3 btn-primary"
         >
            Save
         </Link>
      </>
   );
}
