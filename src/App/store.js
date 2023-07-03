import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import counterReducer from "./Feature/CounterFeature/Reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  counter: counterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
