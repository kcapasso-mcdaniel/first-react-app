import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import CreateQuestion from "./components/pages/CreateQuestion";
import UserAssignments from "./components/pages/UserAssignments";
import NotFound from "./components/pages/NotFound";
import Reports from "./components/pages/Reports";
import AssignQuestion from "./components/pages/AssignQuestion";

function App() {
   return (
      <Router>
         {/* switch will wrap the individual routes */}
         <Switch>
            {/* render the component when the path is called in the url  */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/create-question" component={CreateQuestion} />
            <Route exact path="/user-assignments" component={UserAssignments} />
            <Route exact path="/assign-question" component={AssignQuestion} />
            <Route exact path="/reports" component={Reports} />
            {/* if url does not match above render this component */}
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
