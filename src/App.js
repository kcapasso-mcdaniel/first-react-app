// import React from "react";
// import "./style/master.scss";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Landing from "./components/pages/Landing";
// import CreateQuestion from "./components/pages/CreateQuestion";
// import CreateQuestionsList from "./components/pages/CreateQuestionsList";
// import UserAssignedQuestions from "./components/pages/UserAssignedQuestions";
// import AdminReportPage from "./components/pages/AdminReportPage";
// import NotFound from "./components/pages/NotFound";

// function App() {
//    return (
//       <Router>
//          {/* switch will wrap the individual routes */}
//          <Switch>
//             {/* render the component when the path is called in the url  */}
//             <Route exact path="/" component={Landing} />
//             <Route exact path="/create-question" component={CreateQuestion} />
//             <Route
//                exact
//                path="/create-questions-list"
//                component={CreateQuestionsList}
//             />
//             <Route
//                exact
//                path="/user-assigned-questions"
//                component={UserAssignedQuestions}
//             />
//             <Route
//                exact
//                path="/admin-report-page"
//                component={AdminReportPage}
//             />
//             {/* if url does not match above render this component */}
//             <Route component={NotFound} />
//          </Switch>
//       </Router>
//    );
// }

// export default App;
