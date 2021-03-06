import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import Download from "@material-ui/icons/ArrowDownward";
import TwitterIcon from "@material-ui/icons/Twitter";
import JSONbig from "json-bigint";
import Skeleton from "@material-ui/lab/Skeleton";

const styles = (theme) => ({
  root: {
    flex: 1,
    paddingTop: 100,
    margin: "auto",
    width: "85vw",
    display: "flex",
    justifyContent: "center",
  },
});

export class Video extends Component {
  state = {
    error: false,
    loading: false,
    video: {},
  };

  UNSAFE_componentWillMount = () => {
    this.loadVideo();
  };

  loadVideo = () => {
    this.setState({ loading: true }, () => {
      const slug = this.props.match.params.slug;
      const url = `${process.env.API_URL}/api/${slug}`;

      axios
        .get(url, { transformResponse: (data) => JSONbig.parse(data) })
        .then((res) => {
          this.setState({
            video: res.data,
            loading: false,
          });
        })
        .catch((err) =>
          this.setState({
            error: err.message,
            loading: false,
          })
        );
    });
  };

  downloadVideo = (video) => {
    const videoURL = video.url;
    const slug = video.slug;

    axios({
      url: videoURL,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(
        new Blob([response.data], {
          type: "video/mp4",
        })
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = `${slug}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  };

  render() {
    const { downloadVideo } = this;
    const { video, loading } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* Desktop UI */}
        <Hidden mdDown>
          <Card style={{ width: 640 }}>
            <CardActionArea>
              {loading ? (
                <Skeleton
                  animation="wave"
                  variant="rect"
                  style={{ height: 360 }}
                />
              ) : (
                <CardMedia
                  component="video"
                  height="360"
                  src={video.url}
                  style={{ objectFit: "contain" }}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                />
              )}
            </CardActionArea>
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {loading ? (
                <>
                  <Skeleton animation="wave" height={45} width={80} />
                  <Skeleton animation="wave" height={45} width={80} />
                </>
              ) : (
                <>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<TwitterIcon />}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://twitter.com/i/status/${video.parent_tweet_id}`}
                  >
                    Source
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    startIcon={<Download />}
                    onClick={() => downloadVideo(video)}
                  >
                    Download
                  </Button>
                </>
              )}
            </CardActions>
          </Card>
        </Hidden>

        {/* mobile UI */}
        <Hidden mdUp>
          <Card style={{ width: "100%" }}>
            <CardActionArea>
              {loading ? (
                <Skeleton
                  animation="wave"
                  variant="rect"
                  style={{ height: "70vh" }}
                />
              ) : (
                <CardMedia
                  component="video"
                  // height="60vh"
                  src={video.url}
                  style={{ objectFit: "contain", height: "70vh" }}
                  controls
                  disablePictureInPicture
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                />
              )}
            </CardActionArea>
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {loading ? (
                <>
                  <Skeleton animation="wave" height={45} width={80} />
                  <Skeleton animation="wave" height={45} width={80} />
                </>
              ) : (
                <>
                  <Button
                    size="small"
                    color="primary"
                    style={{
                      color: "#185adb",
                      fontFamily: "inherit",
                    }}
                    startIcon={<TwitterIcon />}
                    href={`https://twitter.com/i/status/${video.parent_tweet_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    className={classes.buttons}
                    style={{ fontFamily: "inherit" }}
                    startIcon={<Download />}
                    onClick={() => downloadVideo(video)}
                  >
                    Download
                  </Button>
                </>
              )}
            </CardActions>
          </Card>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Video));
