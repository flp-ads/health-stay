import { Switch, Route as ReactDOMRoute, Redirect } from "react-router-dom";
import Route from "./route";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Habits from "../pages/Habits";
import Groups from "../pages/Groups";
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../components/Dashboard_Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/signup" component={SignUp} />

      <Route path="/login" component={Login} />

      <Route path="/habitos" component={Habits} />

      <Route path="/grupos" component={Groups}>
        <Groups />
      </Route>

      <ReactDOMRoute
        path="/dashboard"
        render={({ match: { path } }) => (
          <Dashboard>
            <Switch>
              <Route
                exact
                path={`${path}`}
                component={() => <Redirect to={`${path}/home`} />}
              />
              <Route path={`${path}/home`} component={DashboardHome} />
              <Route path={`${path}/grupos`} component={DashboardHome} />
              <Route path={`${path}/habitos`} component={DashboardHome} />
              <Route component={() => <Redirect to={`${path}/home`} />} />
            </Switch>
          </Dashboard>
        )}
      />
      <Route component={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
