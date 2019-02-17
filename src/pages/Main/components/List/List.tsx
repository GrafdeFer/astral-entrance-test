import * as React from "react";
import { Link } from "react-router-dom";
import { IList } from "src/types";

interface IListProps extends IList {
  deleteList: (id: string) => void;
}

const List: React.FunctionComponent<IListProps> = props => {
  const { items, name, id, deleteList } = props;

  const purchasedCount = items.filter(item => item.purchased).length;

  const onDeleteList = (deleteID: string) => (ev: React.MouseEvent) => {
    deleteList(deleteID);
  };

  const totalCount = items.length;
  return (
    <React.Fragment>
      <Link to={`/list/${id}`}>
        <div>{name}</div>
        <div>{`${purchasedCount}/${totalCount}`}</div>
      </Link>
      <button onClick={onDeleteList(id)}>delete</button>
    </React.Fragment>
  );
};

export default List;
