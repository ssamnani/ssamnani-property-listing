import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import "./Header.module.css";
import { Container } from "@material-ui/core";
import HeaderTabs from "./HeaderTabs";
import Breadcrumb from "./Breadcrumb";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="appHeader">
        <div className="navWrapper">
          <img
            src="/assets/images/iproperty-logo.png"
            className="logo"
            alt="iproperty-logo"
          />
          <div>
            <HeaderTabs />
          </div>
        </div>
        <Breadcrumb />
      </div>
    </div>
  );
}

export default Header;
