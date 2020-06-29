import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import CreateQuestion from "./components/pages/CreateQuestion";
import CreatedQuestionsList from "./components/pages/CreatedQuestionsList";
import UserAssignedQuestions from "./components/pages/UserAssignedQuestions";
import NotFound from "./components/pages/NotFound";
import UserReports from "./components/pages/UserReports";

function App() {
   return (
      <Router>
         {/* switch will wrap the individual routes */}
         <Switch>
            {/* render the component when the path is called in the url  */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/create-question" component={CreateQuestion} />
            <Route
               exact
               path="/created-question-list"
               component={CreatedQuestionsList}
            />
            <Route
               exact
               path="/user-assigned-questions"
               component={UserAssignedQuestions}
            />
            <Route exact path="/user-reports" component={UserReports} />
            {/* if url does not match above render this component */}
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
