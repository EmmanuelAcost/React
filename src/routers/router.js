import React from "react";
import { Switch, Route } from "react-router-dom";
import Showcase from "../UI/Pages/showcase/showcase";
import FullLayout from "./fullLayout";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"}>
          <FullLayout></FullLayout>
        </Route>
        <Route exact path={"/sale"}>
          <FullLayout>
            <Showcase />
          </FullLayout>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
