import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
  }
  render() {
    return (
      <div>
        <input
          value={this.state.search}
          onChange={(event) => this.setState({search: event.target.value})} />
      </div>
    );
  }
}

export default SearchBar;