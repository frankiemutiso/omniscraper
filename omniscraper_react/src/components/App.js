import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

import Home from "./Home";
import Nav from "./Nav";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: true,
      error: false,
      loading: false,
      videos: [],
      hasMore: true,
      offset: 0,
      limit: 12,
    };

    window.onscroll = () => {
      const {
        loadVideos,
        state: { error, loading, hasMore },
      } = this;

      if (error || loading || !hasMore) return;

      if (
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop ===
        document.documentElement.clientHeight
      ) {
        loadVideos();
      }
    };
  }

  componentDidMount = () => {
    this.loadVideos();
  };

  loadVideos = () => {
    this.setState({ loading: true }, () => {
      const { offset, limit } = this.state;

      axios
        .get(`http://127.0.0.1:8000/videos/?limit=${limit}&offset=${offset}`)
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
            error: err.message,
            loading: false,
          });
        });
    });
  };

  handleAuthChange = (e) => {
    this.setState({ auth: e.target.checked });
  };

  render() {
    const { auth, error, loading, hasMore, videos } = this.state;

    return (
      <React.Fragment>
        <Nav auth={auth} />
        <Home
          error={error}
          loading={loading}
          videos={videos}
          hasMore={hasMore}
        />
      </React.Fragment>
    );
  }
}

export default App;

render(<App />, document.getElementById("app"));
