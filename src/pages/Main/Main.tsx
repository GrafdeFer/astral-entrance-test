import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import List from "./components/List";
import NewListForm from "./components/NewListForm";
import * as styles from "./Main.css";
import { IMainDispatchProps, IMainStateProps } from "./types";

interface IMainProps extends IMainStateProps, IMainDispatchProps {}

const Main: React.FunctionComponent<IMainProps> = props => {
  const { newList, changeName, openForm, resetForm, createList } = props;
  const renderLists = () => {
    const { lists } = props;
    return Object.keys(lists).map(key => <List key={key} {...lists[key]} />);
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Мои списки
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.mainContent}>
        <NewListForm
          {...newList}
          changeName={changeName}
          openForm={openForm}
          resetForm={resetForm}
          createList={createList}
        />
        {renderLists()}
      </div>
    </React.Fragment>
  );
};

export default Main;
