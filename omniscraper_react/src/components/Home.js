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
import Download from "@material-ui/icons/ArrowDownward";
import TwitterIcon from "@material-ui/icons/Twitter";
import VideoDialog from "./VideoDialog";
import VisibilityIcon from "@material-ui/icons/Visibility";

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
  state = {
    open: false,
    url: "",
    parentTweet: null,
  };

  handleDialogOpen = (video) => {
    this.setState({
      open: true,
      url: video.url,
      parentTweet: video.parent_tweet_id,
    });
  };

  handleDialogClosed = () => {
    this.setState({ open: false, url: "", parentTweet: null });
  };

  render() {
    const { open, url, parentTweet } = this.state;
    const { error, loading, hasMore, videos, classes } = this.props;
    const { handleDialogOpen, handleDialogClosed } = this;

    return (
      <div className={classes.root}>
        <VideoDialog
          open={open}
          handleClose={handleDialogClosed}
          url={url}
          parentTweet={parentTweet}
        />
        <Grid container spacing={6}>
          {videos.map((video) => (
            <Grid item lg={3} md={6} sm={6} xs={12} key={video.id}>
              <Card style={{ maxWidth: 380 }}>
                <CardActionArea>
                  <CardMedia
                    component="video"
                    height="160"
                    disablePictureInPicture
                    controlsList="nodownload"
                    src={video.url}
                    style={{ objectFit: "cover" }}
                    onClick={() => handleDialogOpen(video)}
                    onContextMenu={(e) => e.preventDefault()}
                  ></CardMedia>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    startIcon={<VisibilityIcon />}
                    onClick={() => handleDialogOpen(video)}
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
