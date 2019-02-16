import * as React from "react";
import { Link } from "react-router-dom";
import { IList } from "src/types";

const List: React.FunctionComponent<IList> = ({ items, name, id }) => {
  const purchasedCount = () => {
    return items.filter(item => item.purchased).length;
  };

  const totalCount = items.length;
  return (
    <Link to={`/list/${id}`}>
      <div>{name}</div>
      <div>товаров: {totalCount}</div>
      <div>{`${purchasedCount()}/${totalCount}`}</div>
    </Link>
  );
};

export default List;
