import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { IListItem } from "src/types";
import * as styles from "./ListItem.css";

interface IListItemProps extends IListItem {
  listID: string;
  removeItem: (listID: string, itemID: string) => void;
  togglePurchaseItem: (listID: string, itemID: string) => void;
}

const ListItem: React.FunctionComponent<IListItemProps> = props => {
  const onTogglePurchase = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { listID, id } = props;
    props.togglePurchaseItem(listID, id);
  };

  return (
    <Paper className={styles.listItem}>
      <Typography variant="subtitle1">{props.name}</Typography>
      <div className={styles.info}>
        <Typography variant="caption">Количество: {props.count}</Typography>
        <Typography variant="caption">Цена: {props.price}</Typography>
      </div>
      <Checkbox checked={props.purchased} onChange={onTogglePurchase} />
    </Paper>
  );
};

export default ListItem;
