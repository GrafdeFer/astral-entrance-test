import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import ListItem from "./components/ListItem/ListItem";
import NewItemForm from "./components/NewItemForm";
import Sidebar from "./components/Sidebar";
import { IViewDispatchProps, IViewStateProps } from "./types";
import * as styles from "./View.css";

interface IMatchParams {
  id: string;
}

export interface IViewProps
  extends IViewStateProps,
    IViewDispatchProps,
    RouteComponentProps<IMatchParams> {}

export interface IViewState {
  filter: "purchased" | "no";
}

export default class View extends React.Component<IViewProps, IViewState> {
  constructor(props: IViewProps) {
    super(props);
    this.state = {
      filter: "no"
    };
  }

  public render() {
    const { lists } = this.props;
    const listID = this.props.match.params.id;
    const list = lists[listID];

    if (lists.hasOwnProperty(listID)) {
      const { removeItem, togglePurchaseItem } = this.props;
      const { items, tags } = list;

      const listItems = items.map(item => (
        <ListItem
          key={item.id}
          listID={listID}
          {...item}
          removeItem={removeItem}
          togglePurchaseItem={togglePurchaseItem}
        />
      ));

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
              <NewItemForm listID={listID} />
              <div>{listItems}</div>
            </div>
            <Sidebar tags={tags} items={items} listID={listID} />
          </div>
        </React.Fragment>
      );
    }
    return (
      <div>
        <h1>404</h1>
      </div>
    );
  }
}
