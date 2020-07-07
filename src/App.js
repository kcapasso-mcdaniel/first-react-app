import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import CreateQuestion from "./components/pages/CreateQuestion";
import UserReport from "./components/pages/UserReport";
import NotFound from "./components/pages/NotFound";
import AssignQuestion from "./components/pages/AssignQuestion";
import AssignedToMe from "./components/pages/AssignedToMe";

function App() {
   return (
      <Router>
         {/* switch will wrap the individual routes */}
         <Switch>
            {/* render the component when the path is called in the url  */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/create-question" component={CreateQuestion} />
            <Route exact path="/user-report" component={UserReport} />
            <Route exact path="/assign-question" component={AssignQuestion} />
            <Route exact path="/assigned-to-me" component={AssignedToMe} />
            {/* if url does not match above render this component */}
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
