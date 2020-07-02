import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import CreateQuestion from "./components/pages/CreateQuestion";
import QuestionSummary from "./components/pages/QuestionSummary";
import NotFound from "./components/pages/NotFound";
import Reports from "./components/pages/Reports";
import AssignedQuestions from "./components/pages/AssignedQuestions";

function App() {
   return (
      <Router>
         {/* switch will wrap the individual routes */}
         <Switch>
            {/* render the component when the path is called in the url  */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/create-question" component={CreateQuestion} />
            <Route exact path="/question-summary" component={QuestionSummary} />
            <Route
               exact
               path="/assigned-questions"
               component={AssignedQuestions}
            />
            <Route exact path="/reports" component={Reports} />
            {/* if url does not match above render this component */}
            <Route component={NotFound} />
         </Switch>
      </Router>
   );
}

export default App;
