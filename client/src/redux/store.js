import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/index";
import thunk from "redux-thunk";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);
export default store;