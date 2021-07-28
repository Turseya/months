import React from "react";
import './App.css';
import Header from "./component/header";
import Months from "./component/months";
import Main from "./component/Main";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App(props) {
  return (
      <Router>
          <div className="App">
              <Header />
              <Main />
          </div>
      </Router>
  );
}

export default App;
