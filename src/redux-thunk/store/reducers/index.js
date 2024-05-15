import { combineReducers } from "redux";
import { studentReducer } from "./studentReducer";


const rootReducers = combineReducers({
    StudentList : studentReducer
    
});

export default rootReducers;