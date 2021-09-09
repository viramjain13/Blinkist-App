import React, { useState } from "react";
import { Link, IconButton } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/Login";


const AccountMenu = ():any => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, isAuthenticated, logout } = useAuth0();
  let accountMenu: any;
  if (isAuthenticated) {
    accountMenu = (
      <div>
        <Link
          color="textPrimary"
          aria-controls="account-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Account
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </Link>
        <Menu
          id="account-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Invite Friends</MenuItem>
          <MenuItem onClick={handleClose}>Whishlist</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Help &amp; Support</MenuItem>
          <MenuItem
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
    );
  } else {
    accountMenu = (
      <div>
        <LoginButton />
      </div>
    );
  }
  return <>{accountMenu}</>;
};

export default AccountMenu;
