import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import newsReducer, { newsDetailReducers } from "./reducers/newsReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  news: newsReducer,
  newsDetail: newsDetailReducers,
});

const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
