import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = (preloadedState?: any) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, createLogger()) // api
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
};

export default configureStore;