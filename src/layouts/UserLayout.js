import React from "react";
import { Switch, Route, Link, Redirect } from "dva/router";
import dynamic from "dva/dynamic";
import app from "../index.js";
import styles from "./IndexLayout.less";
import { userRoutes } from "../configs/routes.js";

export default function UserLayout() {
  return (
    <div>
      <div className={styles.header}>UserLayout</div>
      <ul className={styles.nav}>
        <li>
          <Link className={styles.link} to="/">
            to /
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/user">
            to /user
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/user/example">
            to /user/example
          </Link>
        </li>
      </ul>

      <Switch>
        {userRoutes.map(({ path, ...dynamics }, key) => (
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
