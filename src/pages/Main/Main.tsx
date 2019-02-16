import * as React from "react";
import List from "./components/List";
import NewListForm from "./components/NewListForm";
import { IMainDispatchProps, IMainStateProps } from "./types";

interface IMainProps extends IMainStateProps, IMainDispatchProps {}

export default class Main extends React.Component<IMainProps, any> {
  public componentDidMount = () => {
    const { getLists } = this.props;
    getLists();
  };

  public renderLists = () => {
    const { lists, deleteList } = this.props;
    return lists.map(list => (
      <List key={list.id} {...list} deleteList={deleteList} />
    ));
  };

  public onCreateList = (name: string) => (ev: React.MouseEvent) => {
    const { createList } = this.props;
    createList(name);
  };

  public render() {
    const { newList, changeName, openForm, resetForm } = this.props;
    return (
      <React.Fragment>
        {newList.display && (
          <React.Fragment>
            <NewListForm changeName={changeName} {...newList} />
            <button onClick={resetForm}>Отмена</button>
            <button onClick={this.onCreateList(newList.name)}>Сохранить</button>
          </React.Fragment>
        )}
        {!newList.display && <button onClick={openForm}>Добавить</button>}
        <h2>Мои списки</h2>
        {this.renderLists()}
      </React.Fragment>
    );
  }
}
