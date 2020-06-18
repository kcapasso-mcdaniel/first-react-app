import React from "react";

export default function QuestionList() {
   return (
      <div className="col-6">
         <h3 className="d-inline">Question will go here </h3>
         <div className="custom-control custom-radio">
            <input
               type="radio"
               id="customRadio1"
               name="customRadio"
               className="custom-control-input"
            />
            <label className="custom-control-label" htmlFor="customRadio1">
               Answer
            </label>
         </div>
         <div className="custom-control custom-radio">
            <input
               type="radio"
               id="customRadio2"
               name="customRadio"
               className="custom-control-input"
            />
            <label className="custom-control-label" htmlFor="customRadio2">
               Answer
            </label>
         </div>
         <div className="custom-control custom-radio">
            <input
               type="radio"
               id="customRadio3"
               name="customRadio"
               className="custom-control-input"
            />
            <label className="custom-control-label" htmlFor="customRadio3">
               Answer
            </label>
         </div>
         <div className="custom-control custom-radio">
            <input
               type="radio"
               id="customRadio4"
               name="customRadio"
               className="custom-control-input"
            />
            <label className="custom-control-label" htmlFor="customRadio4">
               Answer
            </label>
         </div>
      </div>
   );
}
