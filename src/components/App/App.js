import React from "react";
import Devices from "../feature/Devices";
import { Provider } from "react-redux";
import "./styles.css";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="instructions">
        <h1>Relayr Device Dashboard</h1>
        <Devices />
      </div>
    </Provider>
  );
};

export default App;
