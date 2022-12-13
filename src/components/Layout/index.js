import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "styles";

const Layout = ({ children, classes }) => {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 50 }} className={classes.primaryBackgroundColor}>
      {children}
    </div>
  );
};
export default withStyles(styles)(Layout);
