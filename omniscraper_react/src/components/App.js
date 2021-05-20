import React, { Component } from "react";
import { render } from "react-dom";

import AppBar from "@material-ui/core/AppBar";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

class App extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleMenuOpen = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleMenuClosed = () => {
    this.setState({ anchorEl: null });
  };

  handleAuthChange = (e) => {
    this.setState({ auth: e.target.checked });
  };

  render() {
    const { handleMenuOpen, handleMenuClosed } = this;
    const { auth, anchorEl } = this.state;

    const open = Boolean(anchorEl);

    const navBar = (
      <div style={{ flexGrow: 1, margin: 0 }}>
        <AppBar position="static" style={{ backgroundColor: "#1b262c" }}>
          <Toolbar>
            <h4
              style={{
                flexGrow: 1,
                textTransform: "uppercase",
              }}
            >
              Omniscraper
            </h4>
            {auth && (
              <div>
                <IconButton
                  onClick={handleMenuOpen}
                  color="inherit"
                  style={{ marginRight: 16 }}
                >
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  keepMounted
                  id="menu-appbar"
                  anchor={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleMenuClosed}
                >
                  <MenuItem
                    style={{ fontWeight: 700 }}
                    onClick={handleMenuClosed}
                  >
                    Create Account
                  </MenuItem>
                  <MenuItem
                    style={{ fontWeight: 700 }}
                    onClick={handleMenuClosed}
                  >
                    Login
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );

    return <React.Fragment>{navBar}</React.Fragment>;
  }
}

export default App;

render(<App />, document.getElementById("app"));
