import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  AppBar,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  IconButton,
} from "@material-ui/core";
import IconButtonComponent from "../../atoms/IconButton/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AccountMenu from "../AccountMenu/AccountMenu";
import AddBook from "../AddBook/AddBook";
import logo from "../../../assets/images/blinkist_logo.png";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import ExploreDropDown from "../ExploreDropDown/ExploreDropDown";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    header: {
      fontFamily: "CeraPRO",
      position: "relative",
      // zIndex: "1000",
    },
    inner_header: {
      backgroundColor: "#FFFFFF",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    navItems: {
      boxSizing: "border-box",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "1024px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "1rem",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    searchIcon: {
      marginRight: "2rem",
      color: "black",
    },
    header_logo: {
      display: "flex",
      alignItems: "center",
      height: "100%",
    },
    title: {
      marginRight: "2rem",
      color: "black",
    },
    account: {
      marginLeft: "auto",
    },
    logo: {
      display: "flex",
      height: "2rem",
      alignItems: "center",
    },
    explore_content_main: {},
  })
);

const HeaderComponent = (props: any) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let addElement: any;
  if (isAuthenticated) {
    addElement = (
      <>
        {" "}
        <Box className={classes.title}>
          <Typography variant="subtitle2">
            <Link color="textPrimary" to="/myLibrary">
              My Library
            </Link>
          </Typography>
        </Box>
        <Box className={classes.title}>
          <Typography variant="subtitle2">
            <Link color="textPrimary" onClick={handleClickOpen} to="#">
              Add Book
            </Link>
          </Typography>
        </Box>
      </>
    );
  } else {
    addElement = <></>;
  }

  return (
    <header className={classes.header}>
      <AppBar className={classes.inner_header} position="fixed">
        <Toolbar className={classes.navItems}>
          <Box className={classes.header_logo}>
            <img className={classes.logo} src={logo} alt="Logo" />
          </Box>
          <Box className={classes.searchIcon}>
            <IconButtonComponent icon={<SearchIcon fontSize="large" />} />
          </Box>
          <Box className={classes.title}>
            <Typography variant="subtitle2">
              Explore{" "}
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Typography>
          </Box>

          {/* <Box className={classes.title}>
            <Typography variant="subtitle2">
              <Link color="textPrimary" to="/myLibrary">
                My Library
              </Link>
            </Typography>
          </Box> */}
          {addElement}

          <Box className={classes.account}>
            <AccountMenu />
          </Box>
        </Toolbar>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <ExploreDropDown />
        </Collapse>
      </AppBar>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <AddBook />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </header>
  );
};

export default HeaderComponent;
