import React from "react";
import { Switch, Route, Link, Redirect } from "dva/router";
import dynamic from "dva/dynamic";
import app from "../index.js";
import styles from "./IndexLayout.less";
import { indexRoutes } from "../configs/routes.js";

export default function IndexLayout() {
  return (
    <div>
      <div className={styles.header}>IndexLayout</div>
      <ul className={styles.nav}>
        <li>
          <Link className={styles.link} to="/">
            to /
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/example">
            to /example
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/user">
            to /user
          </Link>
        </li>
      </ul>

      <Switch>
        {indexRoutes.map(({ path, ...dynamics }, key) => (
          <Route
            exact
            key={key}
            path={path}
            component={dynamic({ app, ...dynamics })}
          />
        ))}
        <Redirect to="/error" />
      </Switch>
    </div>
  );
}
