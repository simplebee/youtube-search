import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {q: ''};
  }
  render() {
    return (
      <div>
        <input
          value={this.state.q}
          onChange={(event) => this.setState({q: event.target.value})} />
      </div>
    );
  }
}

export default SearchBar;