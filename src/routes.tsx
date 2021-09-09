import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyLibraryPage from "./pages/MyLibrary/MyLibrary";
import ExplorePage from "./pages/Explore/Explore";
import PrivateRoute from "./private-routes";

const routes = () => {
  return (
    <div>
      <Switch>
      
          <PrivateRoute exact path="/myLibrary" component={MyLibraryPage}/>
        
        <Route path="/" component={ExplorePage}></Route>
      </Switch>
    </div>
  );
};

export default routes;
