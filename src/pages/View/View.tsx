import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IList } from "src/types";
import Filters from "./components/Filters";
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
  notPurchased: boolean;
  search: string;
}

export default class View extends React.Component<IViewProps, IViewState> {
  constructor(props: IViewProps) {
    super(props);
    this.state = {
      notPurchased: false,
      search: ""
    };
  }

  public onFilterPurchased = () => {
    this.setState({
      notPurchased: !this.state.notPurchased
    });
  };

  public onSearchItem = (search: string) => {
    this.setState({
      search
    });
  };

  public matchSearch = (value: string) => {
    const { search } = this.state;
    return value.toLowerCase().search(search.toLowerCase()) !== -1;
  };

  public listItems = (list: IList, listID: string) => {
    const { removeItem, togglePurchaseItem } = this.props;
    const { notPurchased } = this.state;

    return list.items.map(item => {
      const listItem = (
        <ListItem
          {...item}
          key={item.id}
          listID={listID}
          removeItem={removeItem}
          togglePurchaseItem={togglePurchaseItem}
        />
      );
      if (notPurchased) {
        return (
          !item.purchased === notPurchased &&
          this.matchSearch(item.name) &&
          listItem
        );
      }
      return this.matchSearch(item.name) && listItem;
    });
  };

  public render() {
    const { lists } = this.props;
    const { search, notPurchased } = this.state;
    const listID = this.props.match.params.id;
    const list = lists[listID];

    if (lists.hasOwnProperty(listID)) {
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
              <Filters
                search={search}
                notPurchased={notPurchased}
                filterPurchased={this.onFilterPurchased}
                searchItem={this.onSearchItem}
              />
              {this.listItems(list, listID)}
            </div>
            <Sidebar tags={list.tags} items={list.items} listID={listID} />
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
