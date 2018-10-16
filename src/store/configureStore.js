import { combineReducers, applyMiddleware, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { responsiveStoreEnhancer } from "redux-responsive";
import createSagaMiddleware from "redux-saga";
import * as reducers from "./reducers";
import rootSaga from "./sagas";

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (history, initialState) => {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(
      responsiveStoreEnhancer,
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
