import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import CounterReducer from "./Reducers/CounterReducer";
import AddCartReducer from "./Reducers/AddCartReducer";
import thunk from "redux-thunk";
import dataImgReducer from "./Reducers/dataImgReducer";


  const rootReducer = combineReducers({
    CounterReducer,
    AddCartReducer,
    dataImgReducer
  })

  const debugTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  const customMiddleware = (store) => next => action => {
    console.log("hello world")
  }

  const store = legacy_createStore(rootReducer, applyMiddleware(thunk) );


  export default store;