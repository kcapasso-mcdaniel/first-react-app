import React from "react";

export default function Question() {
   return (
      <div className="col-12">
         <h4 className="d-inline">Title</h4>

         <div className="custom-control custom-radio">
            <input
               type="radio"
               id="customRadio1"
               name="customRadio"
               className="custom-control-input"
            />
            <label
               className="custom-control-label"
               htmlFor="customRadio1"
            ></label>
         </div>
         <div className="custom-control custom-radio">
            <input
               type="radio"
               id="customRadio2"
               name="customRadio"
               className="custom-control-input"
            />
            <label
               className="custom-control-label"
               htmlFor="customRadio2"
            ></label>
         </div>
         <div className="custom-control custom-radio">
            <input
               type="radio"
               id="customRadio3"
               name="customRadio"
               className="custom-control-input"
            />
            <label
               className="custom-control-label"
               htmlFor="customRadio3"
            ></label>
         </div>
         <div className="custom-control custom-radio">
            <input
               type="radio"
               id="customRadio4"
               name="customRadio"
               className="custom-control-input"
            />
            <label
               className="custom-control-label"
               htmlFor="customRadio4"
            ></label>
         </div>
      </div>
   );
}
