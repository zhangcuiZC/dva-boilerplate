import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.less";

function ExamplePage() {
  return <h1 className={styles.title}>Example Page</h1>;
}

ExamplePage.propTypes = {};

export default connect()(ExamplePage);
