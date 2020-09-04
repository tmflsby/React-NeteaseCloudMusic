import { createStore, applyMiddleware, compose } from "redux";
import { counterReducer } from "../pages/Home";

const middleware = []

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)

  middleware.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
