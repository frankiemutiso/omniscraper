import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Hidden,
  withStyles,
} from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";

import Download from "@material-ui/icons/ArrowDownward";
import TwitterIcon from "@material-ui/icons/Twitter";

const styles = (theme) => ({
  root: {
    flex: 1,
    paddingTop: 100,
    margin: "auto",
    width: "80vw",
    display: "flex",
    justifyContent: "center",
  },
  // buttons: {
  //   border: "1px solid #185adb",
  //   color: "#185adb",
  // },
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
      // const url = `http://127.0.0.1:8000/api/${slug}`;
      const url = `https://omniscraper-dev.herokuapp.com/api/${slug}`;

      axios
        .get(url)
        .then((res) => {
          this.setState({ video: res.data });
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
    const url = video.url;
    const slug = video.slug;

    axios
      .get({
        url: url,
        responseType: "blob",
      })
      .then((response) => {
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
        window.URL.revokeObjectURL(url);
      });
  };

  render() {
    const { downloadVideo } = this;
    const { video } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* Desktop UI */}
        <Hidden mdDown>
          <Card style={{ width: 640 }}>
            <CardActionArea>
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
            </CardActionArea>
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                size="small"
                color="primary"
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
                variant="outlined"
                startIcon={<Download />}
                onClick={() => downloadVideo(video)}
              >
                Download
              </Button>
            </CardActions>
          </Card>
        </Hidden>

        {/* mobile UI */}
        <Hidden mdUp>
          <Card style={{ width: "100%" }}>
            <CardActionArea>
              <CardMedia
                component="video"
                // height="60vh"
                src={video.url}
                style={{ objectFit: "contain", height: "75vh" }}
                controls
                disablePictureInPicture
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
              />
            </CardActionArea>
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
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
                variant="outlined"
                className={classes.buttons}
                style={{ fontFamily: "inherit" }}
                startIcon={<Download />}
                onClick={() => downloadVideo(video)}
              >
                Download
              </Button>
            </CardActions>
          </Card>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Video));
