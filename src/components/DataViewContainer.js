import React from 'react';
import { ShotChart } from "./ShotChart";
import { CountSlider } from "./CountSlider";
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
  state = {
    minCount : 2,
    chartType : "hexbin",
  }
  onCountSliderChange = (count) => {
    // console.log(count);
    this.setState({ minCount : count});
  }

  onChartTypeChange = (e) => {
    this.setState({ chartType : e.target.value});
  }
  render() {
    return (
        <div className="data-view">
          <ShotChart
              playerId={this.props.playerId}
              minCount={this.state.minCount}
              chartType={this.state.chartType}
          />
          <div className="filters">
            <CountSlider onCountSliderChange={this.onCountSliderChange}/>
          </div>
          <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
            <Radio value="hexbin">Hexbin</Radio>
            <Radio value="scatter">Scatter</Radio>
          </RadioGroup>
        </div>
    );
  }
}