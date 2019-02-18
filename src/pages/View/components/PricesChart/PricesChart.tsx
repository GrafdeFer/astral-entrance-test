import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { PieChart } from "react-easy-chart";
import { IListItem } from "src/types";
import * as styles from "./PricesChart.css";

interface IPricesChartProps {
  items: IListItem[];
}

export interface IPricesChartState {
  showToolTip: boolean;
  top: number;
  left: number;
  value: number;
  key: string;
}

export default class PricesChart extends React.Component<
  IPricesChartProps,
  IPricesChartState
> {
  constructor(props: IPricesChartProps) {
    super(props);
    this.state = {
      showToolTip: false,
      top: 0,
      left: 0,
      value: 0,
      key: ""
    };
  }

  public onMouseOver = (d: any, e: any) => {
    this.setState({
      showToolTip: true,
      top: e.y,
      left: e.x,
      value: d.value,
      key: d.data.key
    });
  };

  public onMouseOut = () => {
    this.setState({ showToolTip: false });
  };

  public createTooltip = () => {
    if (this.state.showToolTip) {
      const { top, left, key, value } = this.state;
      return (
        <div
          className={styles.tooltip}
          style={{
            top: `${top + 10}px`,
            left: `${left + 10}px`
          }}
        >
          <Typography variant="caption">{`${key}: ${value}`}</Typography>
        </div>
      );
    }
    return false;
  };

  public render() {
    const { items } = this.props;

    const data = items.map(item => ({
      key: item.name,
      value: item.price === 0 ? 1 : item.price
    }));

    return (
      <React.Fragment>
        {this.createTooltip()}
        <Typography variant="caption" gutterBottom={true}>
          Красивая диаграмка:
        </Typography>
        <div className={styles.chart}>
          <PieChart
            size={300}
            data={data}
            mouseOverHandler={this.onMouseOver}
            mouseOutHandler={this.onMouseOut}
          />
        </div>
      </React.Fragment>
    );
  }
}
