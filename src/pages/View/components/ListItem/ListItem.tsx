import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import * as React from "react";
import { moneyFormat } from "src/helpers/moneyFormatter";
import * as styles from "./ListItem.css";
import { IListItemDispatchProps, IListItemStateProps } from "./types";

interface IListItemProps extends IListItemStateProps, IListItemDispatchProps {}

export interface IListItemState {
  anchorEl: any;
}

export default class ListItem extends React.Component<
  IListItemProps,
  IListItemState
> {
  constructor(props: IListItemProps) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  public onTogglePurchase = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { listID, list, togglePurchaseItem } = this.props;
    togglePurchaseItem(listID, list.id);
  };

  public onRemoveItem = () => {
    const { listID, list, removeItem } = this.props;
    removeItem(listID, list.id);
  };

  public handleClick = (ev: React.MouseEvent) => {
    this.setState({ anchorEl: ev.currentTarget });
  };

  public handleClose = () => {
    this.setState({ anchorEl: null });
  };

  public render() {
    const { list } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Paper className={styles.listItem}>
        <Typography variant="subtitle1">{list.name}</Typography>
        <div className={styles.info}>
          <Typography variant="caption">Количество: {list.count}</Typography>
          <Typography variant="caption">
            Цена: {moneyFormat(list.price)}
          </Typography>
        </div>{" "}
        <IconButton
          aria-label="More"
          aria-owns={open ? "long-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Checkbox checked={list.purchased} onChange={this.onTogglePurchase} />
        <Menu anchorEl={anchorEl} open={open} onClose={this.handleClose}>
          <MenuItem onClick={this.onRemoveItem}>Удалить</MenuItem>
        </Menu>
      </Paper>
    );
  }
}
