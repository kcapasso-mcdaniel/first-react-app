import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import questions from "./reducers/questions";
import userQuestions from "./reducers/questions";

export default combineReducers({ currentUser, questions, userQuestions });
