import React from 'react';
import { AutoComplete, Icon, Input} from 'antd';
import nba from 'nba';

export class SearchBar extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : nba.searchPlayers(value).map(player => player.fullName),
    });
  }

  onSelect = (playerName) => {
    this.props.loadPlayerInfo(playerName)
  }

  render() {
    window.nba = nba;
    const { dataSource } = this.state;
    return (
        <AutoComplete
            className="search-bar"
            dataSource={dataSource}
            size="large"
            onSelect={this.onSelect}
            onSearch={this.handleSearch}
            placeholder="Search your Player"
        >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
    );
  }
}
