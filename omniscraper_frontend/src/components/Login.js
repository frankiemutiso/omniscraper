import React, { Component } from "react";

import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const styles = (theme) => ({
  paper: {
    paddingTop: 100,
    margin: "auto",
    width: "40vw",
    [theme.breakpoints.down("sm")]: { width: "80vw" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: "black",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  textField: {
    fontFamily: "inherit",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export class Login extends Component {
  state = {
    showPassword: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.setState({ error: this.props.error });

      console.log("Error on login form", this.props.error);
    }
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  render() {
    const {
      classes,
      handleChange,
      handleSubmit,
      username,
      password,
      loginLoading,
      error,
    } = this.props;

    const { showPassword } = this.state;

    const { handleClickShowPassword, handleMouseDownPassword } = this;

    return (
      <Container>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h4
            style={{
              color: "#1a1c20",
              textTransform: "uppercase",
              fontFamily: "inherit",
              letterSpacing: "0.1em",
            }}
          >
            Log In To Omniscraper
          </h4>
          {error && <p>{error}</p>}
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              value={username}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              inputProps={{ style: { fontFamily: "inherit" } }}
              InputLabelProps={{ style: { fontFamily: "inherit" } }}
              style={{ marginBottom: 20 }}
            />

            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel
                htmlFor="filled-adornment-password"
                style={{ fontFamily: "inherit" }}
              >
                Password
              </InputLabel>
              <OutlinedInput
                size="small"
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleChange}
                label="Password"
                name="password"
                required
                autoComplete="current-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ fontFamily: "inherit", fontWeight: 600 }}
              endIcon={
                loginLoading ? <CircularProgress size={16} color="white" /> : ""
              }
            >
              Log In
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(Login);
