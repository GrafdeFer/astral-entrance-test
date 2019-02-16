import * as React from "react";
import List from "./components/List";
import { IMainDispatchProps, IMainStateProps } from "./types";

interface IMainProps extends IMainStateProps, IMainDispatchProps {}

export default class Main extends React.Component<IMainProps, any> {
  public componentDidMount = () => {
    const { getLists } = this.props;
    getLists();
  };

  public renderLists = () => {
    const { lists } = this.props;
    return lists.map(list => <List key={list.id} {...list} />);
  };

  public render() {
    return (
      <React.Fragment>
        <h2>Мои списки</h2>
        {this.renderLists()}
      </React.Fragment>
    );
  }
}
