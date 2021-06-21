import React, { Suspense, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import axios from "axios";
const Home = React.lazy(() => import("./Home"));
const Login = React.lazy(() => import("./Login"));
import Nav from "./Nav";
const Video = React.lazy(() => import("./Video"));
import { axiosInstance } from "../axiosInstance";
import { Chip, createMuiTheme, ThemeProvider } from "@material-ui/core";
const FilteredVideos = React.lazy(() => import("./FilteredVideos"));
import ReactGA from "react-ga";
import { ThreeDots } from "@bit/mhnpd.react-loader-spinner.three-dots";

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
    clickedTag: localStorage.getItem("clicked_tag") || null,
    tagsLoading: false,
    videoTags: [],

    videosLoadingError: false,
    loading: false,
    offset: 0,
    limit: 12,
    videos: [],
    hasMore: true,
  };

  componentDidMount() {
    this.loadTags();
    this.loadVideos();
  }

  loadVideos = () => {
    this.setState({ loading: true }, () => {
      const { offset, limit } = this.state;
      const url = `https://omniscraper-dev.herokuapp.com/api/videos/?limit=${limit}&offset=${offset}`;
      // const url = `http://127.0.0.1:8000/api/videos/?limit=${limit}&offset=${offset}`;

      axios
        .get(url)
        .then((res) => {
          const newVideos = res.data.videos;
          const hasMore = res.data.has_more;

          this.setState({
            hasMore,
            loading: false,
            videos: [...this.state.videos, ...newVideos],
            offset: offset + limit,
          });
        })
        .catch((err) => {
          this.setState({
            videosLoadingError: err.message,
            loading: false,
          });
        });
    });
  };

  loadTags = () => {
    this.setState({ tagsLoading: true }, () => {
      const url = "https://omniscraper-dev.herokuapp.com/api/tags/";
      // const url = "http://127.0.0.1:8000/api/tags/";

      axios
        .get(url)
        .then((res) => {
          const newTags = res.data.tags;

          this.setState({
            videoTags: newTags,
            tagsLoading: false,
          });
        })
        .catch((err) => {
          this.setState({
            tagsLoading: false,
          });
        });
    });
  };

  handleClickedTag = (tag) => {
    this.setState({ clickedTag: tag }, () =>
      localStorage.setItem("clicked_tag", this.state.clickedTag)
    );
  };

  handleClearClickedTag = () => {
    localStorage.removeItem("clicked_tag");

    this.setState({ clickedTag: null });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    const { username, password } = this.state;
    e.preventDefault();

    this.setState({ loginLoading: true }, () => {
      axiosInstance
        .post("token/obtain/", {
          username,
          password,
        })
        .then((response) => {
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
        console.log(e.statusText);
        this.setState({ loggedIn: false });
      });
  };

  render() {
    const {
      handleChange,
      handleLogin,
      handleLogout,
      handleClickedTag,
      handleClearClickedTag,
      loadTags,
      loadVideos,
    } = this;
    const {
      username,
      password,
      error,
      loggedIn,
      loginLoading,
      videoTags,
      clickedTag,
      tagsLoading,

      videosLoadingError,
      loading,
      hasMore,
      videos,
    } = this.state;

    const trackingId = "UA-190601275-1";
    ReactGA.initialize(trackingId);

    const history = createBrowserHistory();
    history.listen((location) => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });

    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <div>
            <Suspense
              fallback={
                <div
                  style={{
                    height: "100vh",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <ThreeDots color="#185adb" height={50} width={50} />
                </div>
              }
            >
              <Nav
                loggedIn={loggedIn}
                handleLogout={handleLogout}
                handleClearClickedTag={handleClearClickedTag}
              />

              <Switch>
                {loggedIn ? <Redirect from="/login" to="/" /> : ""}
                <Route exact path="/">
                  <Home
                    loggedIn={loggedIn}
                    videoTags={videoTags}
                    handleClickedTag={handleClickedTag}
                    clickedTag={clickedTag}
                    tagsLoading={tagsLoading}
                    loadTags={loadTags}
                    error={videosLoadingError}
                    loading={loading}
                    hasMore={hasMore}
                    videos={videos}
                    loadVideos={loadVideos}
                  />
                </Route>
                <Route
                  path="/tags/:slug"
                  children={
                    <FilteredVideos
                      videoTags={videoTags}
                      loggedIn={loggedIn}
                      handleClickedTag={handleClickedTag}
                      clickedTag={clickedTag}
                      tagsLoading={tagsLoading}
                      loadTags={loadTags}
                    />
                  }
                />
                <Route
                  path="/login"
                  children={
                    <Login
                      username={username}
                      password={password}
                      loginLoading={loginLoading}
                      error={error}
                      handleChange={handleChange}
                      handleSubmit={handleLogin}
                    />
                  }
                ></Route>

                <Route path="/:slug" children={<Video />} />
              </Switch>
            </Suspense>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
