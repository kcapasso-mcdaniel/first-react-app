import React from "react";

export default function QuestionTemplate() {
   return (
      <>
         {/* this would refresh the page */}
         <button className="btn-primary btn-lg">Delete Question</button>
         {/* this would also refresh the page */}
         <button className="btn-primary btn-lg">Save</button>
      </>
   );
}
