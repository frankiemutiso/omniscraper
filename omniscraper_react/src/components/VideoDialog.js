import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  Hidden,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import Download from "@material-ui/icons/ArrowDownward";
import TwitterIcon from "@material-ui/icons/Twitter";

const styles = (theme) => ({
  buttons: {
    border: "1px solid #185adb",
    color: "#185adb",
    fontFamily: "inherit",
    fontWeight: 600,
  },
});

export class VideoDialog extends Component {
  state = {
    autoplay: null,
  };

  render() {
    const { open, handleClose, url, parentTweet, classes } = this.props;

    return (
      <div>
        <Dialog
          maxWidth="sm"
          fullWidth={true}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              // backgroundColor: "transparent",
              // boxShadow: "none",
            },
          }}
        >
          <DialogContent
            style={{
              padding: 0,
            }}
          >
            <Card style={{ maxWidth: 600 }}>
              <CardActionArea>
                <Hidden smUp>
                  <CardMedia
                    component="video"
                    height="180"
                    src={url}
                    style={{ objectFit: "contain" }}
                    autoPlay
                    controls
                    disablePictureInPicture
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </Hidden>

                <Hidden smDown>
                  <CardMedia
                    component="video"
                    height="300"
                    src={url}
                    style={{ objectFit: "contain" }}
                    autoPlay
                    controls
                    disablePictureInPicture
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </Hidden>
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
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(VideoDialog);
