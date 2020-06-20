import React from "react";
import downCaret from "../../icons/caret-down.svg";
import rightCaret from "../../icons/caret-right.svg";
import { FaCheck } from "react-icons/fa";

export default function QuestionList() {
   return (
      <div className="col-12">
         <img src={rightCaret} alt="" style={{ marginTop: "2px" }} />
         <img
            src={downCaret}
            alt=""
            style={{ marginTop: "3px", marginRight: "4px" }}
         />
         <h3 className="d-inline">Question will go here </h3>
         <FaCheck style={{ marginLeft: "5px" }} />
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
