import { combineReducers } from "redux";
import CakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default rootReducer;
