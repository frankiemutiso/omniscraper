import React, { Component } from "react";
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

export class Nav extends Component {
  state = {
    anchorEl: null,
  };

  handleMenuOpen = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleMenuClosed = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { auth } = this.props;
    const { handleMenuOpen, handleMenuClosed } = this;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div style={{ flexGrow: 1, margin: 0 }}>
        <AppBar position="fixed" style={{ backgroundColor: "#1a1c20" }}>
          <Toolbar>
            <h3
              style={{
                flexGrow: 1,
                textTransform: "uppercase",
                fontFamily: "inherit",
                letterSpacing: "0.1em",
              }}
            >
              Omniscraper
            </h3>
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
                  anchorEl={anchorEl}
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
  }
}

export default Nav;
