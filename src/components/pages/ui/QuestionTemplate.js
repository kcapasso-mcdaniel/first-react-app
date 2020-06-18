import React from "react";

export default function QuestionTemplate() {
   return (
      <div className="ml-2">
         <div className="input-group mb-6">
            <div className="input-group-prepend">
               <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
               >
                  Question
               </span>
            </div>
            <input
               type="text"
               className="form-control"
               aria-label="Default"
               aria-describedby="inputGroup-sizing-default"
            />
         </div>
         <div className="input-group mb-4">
            <div className="input-group-prepend">
               <div className="input-group-text">
                  <input
                     type="radio"
                     aria-label="Radio button for following text input"
                  />
               </div>
            </div>
            <input
               type="text"
               className="form-control"
               aria-label="Text input with radio button"
            />
         </div>
         <div className="input-group mb-4">
            <div className="input-group-prepend">
               <div className="input-group-text">
                  <input
                     type="radio"
                     aria-label="Radio button for following text input"
                  />
               </div>
            </div>
            <input
               type="text"
               className="form-control"
               aria-label="Text input with radio button"
            />
         </div>
         <div className="input-group mb-4">
            <div className="input-group-prepend">
               <div className="input-group-text">
                  <input
                     type="radio"
                     aria-label="Radio button for following text input"
                  />
               </div>
            </div>
            <input
               type="text"
               className="form-control"
               aria-label="Text input with radio button"
            />
         </div>
         <div className="input-group mb-4">
            <div className="input-group-prepend">
               <div className="input-group-text">
                  <input
                     type="radio"
                     aria-label="Radio button for following text input"
                  />
               </div>
            </div>
            <input
               type="text"
               className="form-control"
               aria-label="Text input with radio button"
            />
         </div>
         {/* this would refresh the page */}
         <button className="btn-primary btn-lg ml-6 mt-4">
            Delete Question
         </button>
         {/* this would also refresh the page */}
         <button className="btn-primary btn-lg px-8 mr-6 mt-4 float-right">
            Save
         </button>
      </div>
   );
}
