import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { INewList } from "src/types";
import * as styles from "./NewListForm.css";

interface INewListFormProps extends INewList {
  changeName: (name: string) => void;
  openForm: () => void;
  resetForm: () => void;
  createList: (name: string) => void;
}

const NewListForm: React.FunctionComponent<INewListFormProps> = props => {
  const { name, changeName, openForm, resetForm, display } = props;

  const onChangeName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newName = ev.currentTarget.value;
    changeName(newName);
  };

  const onCreateList = (listName: string) => (ev: React.MouseEvent) => {
    const { createList } = props;
    createList(listName);
  };

  return (
    <Paper className={styles.newListForm}>
      <TextField
        className={display ? styles.visible : styles.hidden}
        id="standard-name"
        label="Назовите список..."
        value={name}
        onChange={onChangeName}
        margin="none"
      />
      {!display && (
        <Button onClick={openForm} color="primary" variant="contained">
          Новый список
        </Button>
      )}
      {display && (
        <React.Fragment>
          <Button onClick={resetForm} variant="contained">
            Отмена
          </Button>
          <Button
            onClick={onCreateList(name)}
            color="primary"
            variant="contained"
          >
            Сохранить
          </Button>
        </React.Fragment>
      )}
    </Paper>
  );
};

export default NewListForm;
