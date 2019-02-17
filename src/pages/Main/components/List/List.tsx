import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import { IList } from "src/types";
import * as styles from "./List.css";

const List: React.FunctionComponent<IList> = props => {
  const { items, name, id, tags } = props;

  const purchasedCount = items.filter(item => item.purchased).length;

  const renderTags = tags.map(tag => (
    <Chip key={tag} label={tag} color="primary" />
  ));

  const totalCount = items.length;
  return (
    <Link to={`/list/${id}`} className={styles.link}>
      <Paper className={styles.list}>
        <div className={styles.info}>
          <Typography variant="subtitle1">{name}</Typography>
          <div>{`${purchasedCount}/${totalCount}`}</div>
        </div>
        <div className={styles.tags}>{renderTags}</div>
      </Paper>
    </Link>
  );
};

export default List;
