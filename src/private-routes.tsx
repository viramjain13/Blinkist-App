import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import MyLibraryComponent from "./components/templates/MyLibrary/MyLibrary";

const privateRoutes = (props: any) => {
  const { component, ...args } = props;
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <MyLibraryComponent />,
      })}
      {...args}
    />
  );
};

export default privateRoutes;
