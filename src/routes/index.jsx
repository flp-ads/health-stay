import { Switch, Route as ReactDOMRoute, Redirect } from "react-router-dom";
import Route from "./route";

import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Habits from "../pages/Habits";
import Group from "../pages/Group";
import Groups from "../pages/Groups";
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../components/Dashboard_Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/sobre" component={AboutUs} />

      <Route path="/signup" component={SignUp} />

      <Route path="/login" component={Login} />

      <Route isPrivate path="/group" component={Group} />

      <ReactDOMRoute
        path="/dashboard"
        isPrivate
        render={({ match: { path } }) => (
          <Dashboard>
            <Switch>
              <Route
                exact
                isPrivate
                path={`${path}`}
                component={() => <Redirect to={`${path}/home`} />}
              />
              <Route
                isPrivate
                path={`${path}/home`}
                component={DashboardHome}
              />
              <Route isPrivate path={`${path}/grupos`} component={Groups} />
              <Route isPrivate path={`${path}/habitos`} component={Habits} />
              <Route
                isPrivate
                component={() => <Redirect to={`${path}/home`} />}
              />
            </Switch>
          </Dashboard>
        )}
      />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
