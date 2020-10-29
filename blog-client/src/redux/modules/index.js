import { combineReducers } from "redux";
import base from "./base";
import auth from "./auth";
import user from "./user";

import { penderReducer } from "redux-pender";

//모듈 안 리듀서들을 하나로 합쳐줌.
export default combineReducers({
  base,
  auth,
  user,
  pender: penderReducer,
});
