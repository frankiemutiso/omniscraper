import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";

import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    const { loggedIn, handleLogout } = this.props;

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
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Omniscraper
              </Link>
            </h3>
            <div>
              <h4>
                {loggedIn ? (
                  <Link
                    to="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Login
                  </Link>
                )}
              </h4>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Nav;
