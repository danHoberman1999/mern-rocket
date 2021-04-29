import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Users from "./components/users";
import SignUp from "./components/sign-up";
import LogIn from "./components/login";
import NoMatch from "./components/noMatch";
import PrivacyPolicy from "./components/privacyPolicy";
import MyProfile from "./components/myProfile";
import ProfileUpload from "./components/profileUpload";
import Payment from "./components/payment";
import User from "./components/user";
import Engine from "./components/engineChat";
import Simple from "./components/simpleChat";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    loggedIn: false,
    username: null,
  });

  function getUser() {
    axios.get("/info").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        setUser({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Get user: no user");
        setUser({
          loggedIn: false,
          username: null,
        });
      }
    });
  }

  //getUser();

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home loggedIn={user.loggedIn} />}
          />
          <Route
            path="/my-profile"
            render={() => (
              <MyProfile loggedIn={user.loggedIn} updateUser={user.username} />
            )}
          />
          <Route
            path="/users"
            render={() => <Users loggedIn={user.loggedIn} />}
          />
          <Route
            path="/engine-chat"
            render={() => <Engine loggedIn={user.loggedIn} />}
          />
          <Route
            path="/simple-chat"
            render={() => <Simple loggedIn={user.loggedIn} />}
          />
          <Route
            path="/user"
            render={() => <User loggedIn={user.loggedIn} />}
          />
          <Route
            path="/sign-up"
            render={() => <SignUp loggedIn={user.loggedIn} />}
          />
          <Route
            path="/profile-upload"
            render={() => <ProfileUpload loggedIn={user.loggedIn} />}
          />
          <Route
            path="/payment"
            render={() => <Payment loggedIn={user.loggedIn} />}
          />
          <Route
            path="/log-in"
            render={() => <LogIn loggedIn={user.loggedIn} />}
          />
          <Route
            path="/privacy-policy"
            render={() => <PrivacyPolicy loggedIn={user.loggedIn} />}
          />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
