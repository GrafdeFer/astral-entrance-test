import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import * as styles from "./Filters.css";

interface IFiltersProps {
  search: string;
  notPurchased: boolean;
  searchItem: (search: string) => void;
  filterPurchased: () => void;
}

const Filters: React.FunctionComponent<IFiltersProps> = props => {
  const onSearchItem = (ev: React.ChangeEvent<HTMLInputElement>) => {
    props.searchItem(ev.currentTarget.value);
  };

  return (
    <Paper className={styles.filters}>
      <TextField
        fullWidth={true}
        id="search-field"
        label="Поле поиска"
        type="search"
        margin="none"
        value={props.search}
        onChange={onSearchItem}
      />
      <Checkbox checked={props.notPurchased} onChange={props.filterPurchased} />
    </Paper>
  );
};

export default Filters;
