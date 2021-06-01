import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";
import Video from "./Video";
import { axiosInstance } from "../axiosInstance";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
  palette: {
    primary: {
      main: "#185adb",
    },
    secondary: {
      main: "#cf0000",
    },
  },
});

class App extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: localStorage.getItem("access_token") ? true : false,
    loginLoading: false,
    error: null,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const { username, password } = this.state;
    e.preventDefault();

    this.setState({ loginLoading: true }, () => {
      axiosInstance
        .post("token/obtain/", {
          username,
          password,
        })
        .then((response) => {
          if (response.data.detail) {
            this.setState({ loggedIn: false, error: response.data.detail });
            console.log("Error on App", response.data.detail);
          }

          axiosInstance.defaults.headers["Authorization"] =
            "JWT " + response.data.access;

          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);

          this.setState({
            loggedIn: true,
            loginLoading: false,
            username: "",
            password: "",
          });
        })
        .catch((error) => {
          console.log(error.message);
          this.setState({ loggedIn: false, loginLoading: false });
        });
    });
  };

  handleLogout = () => {
    axiosInstance
      .post("/blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      })
      .then((response) => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        axiosInstance.defaults.headers["Authorization"] = null;

        this.setState({ loggedIn: false });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    const { handleChange, handleSubmit, handleLogout } = this;
    const { username, password, error, loggedIn, loginLoading } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Nav loggedIn={loggedIn} handleLogout={handleLogout} />
            <Switch>
              {loggedIn ? <Redirect from="/login" to="/" /> : ""}
              <Route exact path="/">
                <Home loggedIn={loggedIn} />
              </Route>
              <Route
                path="/login"
                children={
                  <Login
                    username={username}
                    password={password}
                    loginLoading={loginLoading}
                    error={error}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                  />
                }
              ></Route>

              <Route path="/:slug" children={<Video />} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
