import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Button/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#03314b",
    backgroundColor: "#2ce080",
  },
}));

const LoginButton = () => {
  const classes = useStyles();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  let addElement: any;
  if (!isAuthenticated) {
    addElement = (
      <Button
        onClick={() => loginWithRedirect()}
        title="Login"
        className={classes.root}
      />
    );
  } else {
    addElement = <></>;
  }
  return <>{addElement}</>;
};

export default LoginButton;
