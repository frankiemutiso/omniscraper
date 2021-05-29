import React, { Component } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  CircularProgress,
  IconButton,
  withStyles,
} from "@material-ui/core";
import ReportIcon from "@material-ui/icons/Report";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";
import axios from "axios";

const styles = (theme) => ({
  root: {
    color: "#185adb",
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 100,
  },
  spinner: {
    color: "#185adb",
    margin: 20,
  },
  buttons: {
    border: "1px solid #185adb",
    color: "#185adb",
    fontFamily: "Montserrat",
  },
});

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        .get(
          `http://127.0.0.1:8000/api/videos/?limit=${limit}&offset=${offset}`
        )
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

  render() {
    const { error, loading, hasMore, videos } = this.state;
    const { classes, loggedIn } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={6}>
          {videos.map((video) => (
            <Grid item lg={3} md={6} sm={6} xs={12} key={video.id}>
              <Card style={{ maxWidth: 380 }}>
                <CardActionArea>
                  <CardMedia
                    component={Link}
                    to={`/${video.slug}`}
                    component="video"
                    height="160"
                    disablePictureInPicture
                    controlsList="nodownload"
                    src={video.url}
                    style={{ objectFit: "cover" }}
                    onContextMenu={(e) => e.preventDefault()}
                  ></CardMedia>
                </CardActionArea>
                <CardActions
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {loggedIn && (
                    <Button
                      size="small"
                      variant="outlined"
                      color="secondary"
                      startIcon={<ReportIcon />}
                      style={{ fontFamily: "inherit", fontWeight: 600 }}
                    >
                      Report
                    </Button>
                  )}

                  <Button
                    component={Link}
                    to={`/${video.slug}`}
                    size="small"
                    variant="outlined"
                    color="primary"
                    startIcon={<VisibilityIcon />}
                    className={classes.buttons}
                    style={{ fontFamily: "inherit", fontWeight: 600 }}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {error && <div>{error}</div>}
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress className={classes.spinner} />
          </div>
        )}
        {!hasMore && <div>No more videos</div>}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
