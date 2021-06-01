import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, withStyles } from "@material-ui/core";

import { Link } from "react-router-dom";

const styles = (theme) => ({
  navLink: {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: 600,
  },
});

export class Nav extends Component {
  render() {
    const { loggedIn, handleLogout, classes } = this.props;

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
              {loggedIn ? (
                <React.Fragment>
                  <Link className={classes.navLink} style={{ marginRight: 16 }}>
                    Create tag
                  </Link>
                  <Link
                    to="/"
                    className={classes.navLink}
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </React.Fragment>
              ) : (
                <Link to="/login" className={classes.navLink}>
                  Login
                </Link>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Nav);
