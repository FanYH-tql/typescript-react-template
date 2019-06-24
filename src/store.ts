import {
  createStore,
  applyMiddleware,
  compose,
  Store
} from 'redux'
import reducers from "./reducers";
import thunk from 'redux-thunk'
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const store: Store = createStore(reducers, enhancer)
export default store