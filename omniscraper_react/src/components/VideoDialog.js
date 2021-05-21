import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import React, { Component } from "react";

export class VideoDialog extends Component {
  render() {
    const { open, handleClose, url, fullWidth } = this.props;

    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent
            style={{
              width: 480,
              height: 340,
            }}
          >
            <video
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                borderRadius: "10px",
                backgroundColor: "#f6f5f5",
              }}
              controls
              autoPlay
              controlsList="nodownload"
              disablePictureInPicture
            >
              <source src={`${url}`} type="video/mp4"></source>
            </video>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default VideoDialog;
