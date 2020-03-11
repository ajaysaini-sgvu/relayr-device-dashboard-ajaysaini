import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import globalReducers from "./store/reducers";
import rootSaga from "./store/sagas";
import App from "./components/App";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(globalReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById("root")
  );
}

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    render(NextApp);
  });
}
