import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button, Toolbar, withStyles } from "@material-ui/core";

import { Link } from "react-router-dom";

const styles = (theme) => ({
  navLink: {
    textDecoration: "none",
    cursor: "pointer",
  },
});

export class Nav extends Component {
  render() {
    const { loggedIn, handleLogout, classes, handleClearClickedTag } =
      this.props;

    return (
      <div style={{ flexGrow: 1, margin: 0 }}>
        <AppBar position="fixed" style={{ backgroundColor: "#1a1c20" }}>
          <Toolbar>
            <h3
              style={{
                flexGrow: 1,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
              onClick={handleClearClickedTag}
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
              {loggedIn && (
                <React.Fragment>
                  <Button
                    size="small"
                    variant="contained"
                    component={Link}
                    to="/"
                    className={classes.navLink}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </React.Fragment>
              
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Nav);
