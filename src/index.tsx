import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5c6bc0"
    },
    secondary: {
      main: "#aed581"
    }
  },
  typography: {
    useNextVariants: true
  }
});

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
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
