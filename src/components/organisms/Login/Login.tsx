import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../atoms/Button/Button";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const loggedIn = isAuthenticated;

  if (!loggedIn) {
    return (
      <Button
        onClick={() => loginWithRedirect()}
        variant="contained"
        name="Login" title="Login" 
        color="secondary"
      />
    );
  } else {
    return <div></div>;
  }
};

export default LoginButton;
