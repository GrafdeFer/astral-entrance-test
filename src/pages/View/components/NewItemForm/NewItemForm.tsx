import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { IListItem } from "src/types";
import * as styles from "./NewItemForm.css";
import {
  INewItemFormDispatchProps,
  INewItemFormProps,
  INewItemFormStateProps
} from "./types";

interface INewItemFormPropses
  extends INewItemFormProps,
    INewItemFormStateProps,
    INewItemFormDispatchProps {}

const NewItemForm: React.FunctionComponent<INewItemFormPropses> = props => {
  const { listID } = props;
  const { name, price, count } = props.newItem;

  const onChangeItemName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newName = ev.currentTarget.value;
    const { changeItemName } = props;
    changeItemName(newName);
  };

  const onChangeItemCount = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(ev.currentTarget.value, 10);
    const { changeItemCount } = props;
    changeItemCount(newCount);
  };

  const onChangeItemPrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(ev.currentTarget.value);
    const { changeItemPrice } = props;
    changeItemPrice(newPrice);
  };

  const onAddItem = (ev: React.MouseEvent) => {
    const { addItem } = props;
    const created = new Date().toISOString();
    const newItem: IListItem = {
      count,
      price,
      name: name !== "" ? name : "Купить то, не знаю что...",
      purchased: false,
      created,
      id: created
    };
    addItem(listID, newItem);
  };

  return (
    <Paper className={styles.newItemForm}>
      <TextField
        fullWidth={true}
        id="item-name"
        label="Хочу купить..."
        value={name}
        onChange={onChangeItemName}
        margin="none"
      />
      <TextField
        id="item-count"
        label="Количество"
        value={count}
        onChange={onChangeItemCount}
        margin="none"
        type="number"
      />
      <TextField
        id="item-price"
        label="Цена"
        value={price}
        onChange={onChangeItemPrice}
        margin="none"
        type="number"
      />
      <Button onClick={onAddItem} color="primary" variant="contained">
        Добавить
      </Button>
    </Paper>
  );
};

export default NewItemForm;
