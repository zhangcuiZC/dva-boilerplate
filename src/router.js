import React from "react";
import { Route, Switch, Router } from "dva/router";
import dynamic from "dva/dynamic";
import baseRoutes from "./configs/routes/base";

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {baseRoutes.map(({ path, ...dynamics }, key) => (
          <Route
            key={key}
            path={path}
            component={dynamic({ app, ...dynamics })}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
