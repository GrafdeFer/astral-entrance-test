import * as React from "react";
import List from "./components/List";
import NewListForm from "./components/NewListForm";
import { IMainDispatchProps, IMainStateProps } from "./types";

interface IMainProps extends IMainStateProps, IMainDispatchProps {}

const Main: React.FunctionComponent<IMainProps> = props => {
  const { newList, changeName, openForm, resetForm } = props;

  const renderLists = () => {
    const { lists, deleteList } = props;
    return lists.map(list => (
      <List key={list.id} {...list} deleteList={deleteList} />
    ));
  };

  const onCreateList = (name: string) => (ev: React.MouseEvent) => {
    const { createList } = props;
    createList(name);
  };
  return (
    <React.Fragment>
      <h2>Мои списки</h2>
      {newList.display && (
        <React.Fragment>
          <NewListForm changeName={changeName} {...newList} />
          <button onClick={resetForm}>Отмена</button>
          <button onClick={onCreateList(newList.name)}>Сохранить</button>
        </React.Fragment>
      )}
      {!newList.display && <button onClick={openForm}>Добавить</button>}
      {renderLists()}
    </React.Fragment>
  );
};

export default Main;
