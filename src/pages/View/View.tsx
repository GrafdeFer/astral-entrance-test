import * as React from "react";
import { IViewDispatchProps, IViewStateProps } from "./types";

export interface IViewProps extends IViewStateProps, IViewDispatchProps {}

export default class View extends React.Component<IViewProps, any> {
  public componentDidMount = () => {
    // alert(this.props.match.params);
  };

  public onDeleteList = (deleteID: string) => (ev: React.MouseEvent) => {
    // listActions.deleteList(deleteID);
  };

  public render() {
    return (
      <div>
        <div>asd</div>
      </div>
    );
  }
}
