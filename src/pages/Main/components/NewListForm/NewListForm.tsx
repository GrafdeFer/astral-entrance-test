import * as React from "react";
import { INewList } from "src/types";

interface INewListFormProps extends INewList {
  changeName: (name: string) => void;
}

const NewListForm: React.FunctionComponent<INewListFormProps> = ({
  name,
  changeName
}) => {
  const onChangeName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newName = ev.currentTarget.value;
    changeName(newName);
  };

  return (
    <div>
      <input value={name} onChange={onChangeName} />
    </div>
  );
};

export default NewListForm;
