import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import * as React from "react";
import { exapleTags } from "src/constants/index";
import * as styles from "./Sidebar.css";

interface ISidebarProps {
  listID: string;
  tags: string[];
  addTag: (listID: string, tag: string) => void;
  removeTag: (listID: string, tag: string) => void;
}

const Sidebar: React.FunctionComponent<ISidebarProps> = props => {
  const { tags, removeTag, listID, addTag } = props;
  const onRemoveTag = (tag: string) => (ev: React.MouseEvent) => {
    removeTag(listID, tag);
  };

  const onAddTag = (tag: string) => (ev: React.MouseEvent) => {
    addTag(listID, tag);
  };

  const pickedTags = tags.map(tag => (
    <Chip key={tag} label={tag} color="primary" onDelete={onRemoveTag(tag)} />
  ));

  const allTags = exapleTags.map(
    tag =>
      !tags.includes(tag) && (
        <Chip key={tag} label={tag} color="primary" onClick={onAddTag(tag)} />
      )
  );

  return (
    <Paper className={styles.sidebar}>
      <div className={styles.tags}>{pickedTags}</div>
      <div className={styles.tags}>{allTags}</div>
    </Paper>
  );
};

export default Sidebar;
