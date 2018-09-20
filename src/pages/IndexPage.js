import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.less";

function IndexPage({ name }) {
  return (
    <h1 className={styles.title}>
      Index Page
      {name}
    </h1>
  );
}

export default connect(({ example }) => ({ ...example }))(IndexPage);
