import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import ListItem from "./components/ListItem/ListItem";
import NewItemForm from "./components/NewItemForm";
import { IViewDispatchProps, IViewStateProps } from "./types";
import * as styles from "./View.css";

interface IMatchParams {
  id: string;
}

export interface IViewProps
  extends IViewStateProps,
    IViewDispatchProps,
    RouteComponentProps<IMatchParams> {}

const View: React.FunctionComponent<IViewProps> = props => {
  const listID = props.match.params.id;
  const {
    lists,
    changeItemName,
    changeItemCount,
    changeItemPrice,
    newItem,
    addItem
  } = props;
  const list = lists[listID];

  const onAddTag = (tag: string) => (ev: React.MouseEvent) => {
    const { addTag } = props;
    addTag(listID, tag);
  };

  // const onRemoveTag = (tag: string) => (ev: React.MouseEvent) => {
  //   const { removeTag } = props;
  //   removeTag(listID, tag);
  // };

  if (lists.hasOwnProperty(listID)) {
    const { removeItem, togglePurchaseItem } = props;
    const listItems = () => {
      const { items } = list;
      return items.map(item => (
        <ListItem
          key={item.id}
          listID={listID}
          {...item}
          removeItem={removeItem}
          togglePurchaseItem={togglePurchaseItem}
        />
      ));
    };

    return (
      <React.Fragment>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {list.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={styles.viewContent}>
          <div className={styles.items}>
            <NewItemForm
              {...newItem}
              listID={listID}
              addItem={addItem}
              changeItemName={changeItemName}
              changeItemCount={changeItemCount}
              changeItemPrice={changeItemPrice}
            />
            <div>{listItems()}</div>
          </div>
          <div>
            <button onClick={onAddTag("kek")}>kek</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default View;
