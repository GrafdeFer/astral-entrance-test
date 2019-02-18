import Typography from "@material-ui/core/Typography";
import * as React from "react";
import * as styles from "./NotFound.css";

const NotFound: React.FunctionComponent<any> = props => {
  return (
    <React.Fragment>
      <Typography variant="h2" color="secondary" className={styles.text}>
        Страшна, вырубай!
      </Typography>
    </React.Fragment>
  );
};

export default NotFound;
