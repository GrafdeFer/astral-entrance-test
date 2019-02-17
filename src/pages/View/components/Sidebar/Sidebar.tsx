import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { exapleTags } from "src/constants/index";
import { IListItem } from "src/types";
import PricesChart from "../PricesChart";
import * as styles from "./Sidebar.css";

interface ISidebarProps {
  listID: string;
  tags: string[];
  items: IListItem[];
  addTag: (listID: string, tag: string) => void;
  removeTag: (listID: string, tag: string) => void;
}

const Sidebar: React.FunctionComponent<ISidebarProps> = props => {
  const { tags, removeTag, listID, addTag, items } = props;
  const onRemoveTag = (tag: string) => (ev: React.MouseEvent) => {
    removeTag(listID, tag);
  };

  const onAddTag = (tag: string) => (ev: React.MouseEvent) => {
    addTag(listID, tag);
  };

  const pickedTags = tags.map(tag => (
    <Chip key={tag} label={tag} color="secondary" onDelete={onRemoveTag(tag)} />
  ));

  const allTags = exapleTags.map(
    tag =>
      !tags.includes(tag) && (
        <Chip key={tag} label={tag} color="primary" onClick={onAddTag(tag)} />
      )
  );

  return (
    <Paper className={styles.sidebar}>
      <Typography variant="caption" gutterBottom={true}>
        Выберите теги:
      </Typography>
      <div className={styles.tags}>{pickedTags}</div>
      <div className={styles.tags}>{allTags}</div>
      <PricesChart items={items} />
    </Paper>
  );
};

export default Sidebar;
