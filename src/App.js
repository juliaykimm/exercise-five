import React from "react";
import { Route, BrowserRouter as Router, ReDirect } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
// Styles
import "./App.css";
// Pages
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";
// Components
import Header from "./components/Header";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "exercise-five-5ff36.firebaseapp.com",
  databaseURL: "https://exercise-five-5ff36.firebaseio.com",
  projectId: "exercise-five-5ff36",
  storageBucket: "exercise-five-5ff36.appspot.com",
  messagingSenderId: "536312284687",
  appId: "1:536312284687:web:c401175ecf70cbc277c57a",
};

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/create-account">
          <CreateAccount />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
