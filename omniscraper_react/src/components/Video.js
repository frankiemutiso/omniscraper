import axios from "axios";
import React, { Component } from "react";

export class Video extends Component {
  state = {
    error: false,
    loading: false,
    video: {},
  };

  componentWillMount = (slug) => {
    this.setState({ loading: true }, () => {
      const url = `http://127.0.0.1:8000/${slug}`;

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

  render() {
    return (
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} key={video.id}>
          <Card style={{ maxWidth: 600 }}>
            <CardActionArea>
              <CardMedia
                component="video"
                height="320"
                src={url}
                style={{ objectFit: "contain" }}
                autoPlay
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
                  fontWeight: 600,
                }}
                startIcon={<TwitterIcon />}
                href={`https://twitter.com/i/status/${parentTweet}`}
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
                startIcon={<Download />}
              >
                Download
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default Video;
