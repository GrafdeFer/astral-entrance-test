import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import { loadState, saveState } from "./helpers/localStorage";
import "./index.css";
import reducer from "./reducers/reducer";

const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState({
    lists: store.getState().lists
  });
});

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
