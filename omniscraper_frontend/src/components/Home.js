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
  Dialog,
  DialogTitle,
  DialogActions,
  Menu,
  MenuItem,
  DialogContent,
  Checkbox,
  TextField,
  Chip,
  Fab,
  Hidden,
} from "@material-ui/core";
import ReportIcon from "@material-ui/icons/Report";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MoreIcon from "@material-ui/icons/MoreVert";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Link } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../axiosInstance";

const styles = (theme) => ({
  root: {
    color: "#185adb",
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 100,
    // position: "relative",
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
  title: {
    "& h2": {
      fontFamily: "inherit",
      fontWeight: 700,
    },
  },
  menuItemText: {
    fontFamily: "inherit",
  },
  fab: {
    margin: 0,
    left: "auto",
    top: "auto",
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    textTransform: "none",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
});

const tags = [
  { tag_name: "Science" },
  { tag_name: "Comedy" },
  { tag_name: "Education" },
  { tag_name: "Politics" },
  { tag_name: "Football" },
  { tag_name: "Religion" },
  { tag_name: "Business" },
  { tag_name: "Lifestyle" },
  { tag_name: "Recipes" },
  { tag_name: "TikTok" },
  { tag_name: "DIY" },
  { tag_name: "History" },
  { tag_name: "Sports" },
  { tag_name: "Art" },
  { tag_name: "News" },
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" color="primary" />;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      videos: [],
      videoTags: [],
      loadingTags: false,
      hasMore: true,
      offset: 0,
      limit: 12,
      open: false,
      clickedVideo: {},
      flagging: false,
      mouseX: null,
      mouseY: null,
      tagsDialogOpen: false,
      createTagDialogOpen: false,
      tagName: "",
      description: "",
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
    this.loadTags();
    this.loadVideos();
  };

  loadTags = () => {
    this.setState({ tagsLoading: true }, () => {
      const url = "http://127.0.0.1:8000/api/tags/";
      const { videoTags } = this.state;

      axios
        .get(url)
        .then((res) => {
          const newTags = res.data.tags;

          this.setState({
            videoTags: [...videoTags, ...newTags],
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

  flagVideo = (video) => {
    const url = `${video.slug}`;
    const flagged = true;

    this.setState({ flagging: true }, () => {
      axiosInstance
        .put(url, {
          id: video.id,
          url: video.url,
          parent_tweet_id: video.parent_tweet_id,
          slug: video.slug,
          flagged: flagged,
        })
        .then((response) => {
          if (response.status === 200) {
            const newVideos = this.state.videos.filter(
              (v) => v.id !== video.id
            );
            this.setState({ flagging: false, videos: newVideos });
            this.handlePromptClose();
          }
        })
        .catch((err) => {
          this.setState({ flagging: false });
          this.handlePromptClose();
        });
    });
  };

  handleCreateTag = () => {
    const url = "http://127.0.0.1:8000/api/tags/";
    const { tagName, description } = this.state;

    this.setState({ creatingTag: true }, () => {
      axios
        .post(url, {
          tag_name: tagName,
          description,
        })
        .then((response) => {
          if (response.status === 201) {
            this.setState({ creatingTag: false });
            this.handleCreateDialogClose();
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({ creatingTag: false });
        });
    });
  };

  handleMenuClick = (video, e) => {
    this.setState({
      mouseX: e.clientX - 2,
      mouseY: e.clientY - 4,
      clickedVideo: video,
    });
  };

  handleMenuClose = () => {
    this.setState({ mouseX: null, mouseY: null, clickedVideo: {} });
  };

  handlePromptOpen = () => {
    this.setState({ open: true });
  };

  handlePromptClose = () => {
    this.setState({ open: false });
    this.handleMenuClose();
  };

  handleTagsDialogOpen = () => {
    this.setState({ tagsDialogOpen: true });
  };

  handleTagsDialogClose = () => {
    this.setState({ tagsDialogOpen: false });
    this.handleMenuClose();
  };

  handleCreateDialogOpen = () => {
    this.setState({ createTagDialogOpen: true });
  };

  handleCreateDialogClose = () => {
    this.setState({ createTagDialogOpen: false });
  };

  handleTagChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      error,
      loading,
      hasMore,
      videos,
      open,
      clickedVideo,
      flagging,
      mouseX,
      mouseY,
      tagsDialogOpen,
      createTagDialogOpen,
      tagName,
      description,
      creatingTag,
      videoTags,
    } = this.state;
    const { classes, loggedIn } = this.props;
    const {
      flagVideo,
      handlePromptOpen,
      handlePromptClose,
      handleMenuClick,
      handleMenuClose,
      handleTagsDialogOpen,
      handleTagsDialogClose,
      handleCreateDialogOpen,
      handleCreateDialogClose,
      handleTagChange,
      handleCreateTag,
    } = this;

    const createTagDialog = (
      <Dialog
        fullWidth={true}
        open={createTagDialogOpen}
        onClose={handleCreateDialogClose}
      >
        <DialogTitle
          className={classes.title}
          style={{ flex: 1, display: "flex", justifyContent: "space-between" }}
        >
          Create a tag
          <IconButton
            className={classes.closeButton}
            onClick={handleCreateDialogClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <TextField
            required
            variant="outlined"
            margin="normal"
            fullWidth
            label="Tag name"
            name="tagName"
            onChange={handleTagChange}
            value={tagName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Description (optional)"
            multiline={true}
            name="description"
            onChange={handleTagChange}
            value={description}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={handleCreateDialogClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            autoFocus
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={handleCreateTag}
            endIcon={
              creatingTag ? <CircularProgress size={16} color="white" /> : ""
            }
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );

    const tagsDialog = (
      <Dialog
        open={tagsDialogOpen}
        onClose={handleTagsDialogClose}
        fullWidth={true}
      >
        <DialogTitle className={classes.title}>
          Edit video tags
          <IconButton
            className={classes.closeButton}
            onClick={handleTagsDialogClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Autocomplete
            fullWidth={true}
            open={tagsDialogOpen}
            multiple
            options={videoTags}
            disableCloseOnSelect
            getOptionLabel={(option) => option.tag_name}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                  color="primary"
                />
                {option.tag_name}
              </React.Fragment>
            )}
            style={{ width: "100%", height: 340 }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Tags" />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            style={{ fontFamily: "inherit", fontWeight: 600 }}
            onClick={handleTagsDialogClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            autoFocus
            style={{ fontFamily: "inherit", fontWeight: 600 }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );

    return (
      <div className={classes.root}>
        <Menu
          keepMounted
          open={mouseY !== null}
          onClose={handleMenuClose}
          anchorReference="anchorPosition"
          anchorPosition={
            mouseY !== null && mouseX !== null
              ? { top: mouseY, left: mouseX }
              : undefined
          }
        >
          <MenuItem className={classes.menuItemText} onClick={handlePromptOpen}>
            Report
          </MenuItem>
          <MenuItem
            className={classes.menuItemText}
            onClick={handleTagsDialogOpen}
          >
            Edit video tags
          </MenuItem>
        </Menu>
        {tagsDialog}
        {createTagDialog}

        <Dialog open={open} onClose={handlePromptClose}>
          <DialogTitle className={classes.title}>
            Are you sure you want to report this video?
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={handlePromptClose}
              color="primary"
              style={{ fontFamily: "inherit" }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => flagVideo(clickedVideo)}
              color="secondary"
              variant="contained"
              autoFocus
              style={{ fontFamily: "inherit" }}
              endIcon={
                flagging ? <CircularProgress size={16} color="white" /> : ""
              }
            >
              Report
            </Button>
          </DialogActions>
        </Dialog>
        <React.Fragment>
          {videoTags.map((tag) => (
            <Chip
              key={tag.tag_name}
              label={tag.tag_name}
              clickable
              color="primary"
              variant="outlined"
              style={{ margin: 5 }}
            />
          ))}
        </React.Fragment>
        <Grid container spacing={6} style={{ marginTop: 10 }}>
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
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={(e) => handleMenuClick(video, e)}
                    >
                      <MoreIcon />
                    </IconButton>
                  )}

                  <Button
                    component={Link}
                    to={`/${video.slug}`}
                    size="small"
                    variant="outlined"
                    color="primary"
                    startIcon={<VisibilityIcon />}
                    className={classes.buttons}
                    style={{
                      fontFamily: "inherit",
                      marginLeft: "auto",
                    }}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {loggedIn && (
          <React.Fragment>
            <Hidden mdDown>
              <Fab
                className={classes.fab}
                color="primary"
                variant="extended"
                size="medium"
                onClick={handleCreateDialogOpen}
              >
                <AddIcon style={{ marginRight: 8 }} />
                Create tag
              </Fab>
            </Hidden>
            <Hidden mdUp>
              <Fab
                className={classes.fab}
                color="primary"
                onClick={handleCreateDialogOpen}
              >
                <AddIcon />
              </Fab>
            </Hidden>
          </React.Fragment>
        )}

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
