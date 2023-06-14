import { combineReducers } from "redux";
//  slice
import postReducer from "./slices/post";

const rootReducer = combineReducers({
  postData: postReducer,
});
export { rootReducer };
