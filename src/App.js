import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, ReDirect } from "react-router-dom";
import firebase from "firebase/app";
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
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  //Function for loggin in
  function LoginFunction(e) {
    // This is what you will run when you want to log in
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("LOGIN RESPONSE", email, response);
      })
      .catch(function (error) {
        console.log("LOGIN ERROR", error);
      });
  }
  //Function for loggin out
  function LogoutFunction(e) {
    // This is what you will run when you want to log out
  }
  //Function for create account
  function CreateAccountFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACC CREATED", email, response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("ACC CREATION FAILED", error);
      });
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogoutFunction={LogoutFunction} />
      <Router>
        <Route exact path="/login">
          <Login LoginFunction={LoginFunction} />
        </Route>
        <Route exact path="/create-account">
          <CreateAccount CreateAccountFunction={CreateAccountFunction} />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
