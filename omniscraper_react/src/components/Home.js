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
} from "@material-ui/core";
import Download from "@material-ui/icons/ArrowDownward";
import TwitterIcon from "@material-ui/icons/Twitter";
import VideoDialog from "./VideoDialog";

export class Home extends Component {
  state = {
    open: false,
    clickedVideoUrl: "",
  };

  handleDialogOpen = (video) => {
    this.setState({ open: true, clickedVideoUrl: video.url });
  };

  handleDialogClosed = () => {
    this.setState({ open: false, clickedVideoUrl: "" });
  };

  render() {
    const { open, clickedVideoUrl } = this.state;
    const { error, loading, hasMore, videos } = this.props;
    const { handleDialogOpen, handleDialogClosed } = this;

    return (
      <div
        style={{ flex: 1, marginRight: 40, marginLeft: 40, paddingTop: 100 }}
      >
        <VideoDialog
          open={open}
          handleClose={handleDialogClosed}
          url={clickedVideoUrl}
        />
        <Grid container spacing={6} style={{}}>
          {videos.map((video) => (
            <Grid item lg={3} md={3} sm={4} xs={12} key={video.id}>
              <Card style={{ maxWidth: 360 }}>
                <CardActionArea>
                  <CardMedia
                    component="video"
                    height="160"
                    src={video.url}
                    style={{ objectFit: "cover" }}
                    onClick={() => handleDialogOpen(video)}
                  ></CardMedia>
                </CardActionArea>
                <CardActions>
                  <IconButton
                    color="primary"
                    style={{ marginRight: "auto", padding: 8 }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    startIcon={<Download />}
                  >
                    Download
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
            <CircularProgress
              style={{
                margin: 20,
              }}
            />
          </div>
        )}
        {!hasMore && <div>No more videos</div>}
      </div>
    );
  }
}

export default Home;
