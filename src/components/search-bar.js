import React, {Component} from 'react';
import {Col, FormGroup, FormControl} from 'react-bootstrap';
import '../styles/search-bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {q: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(event) {
    this.setState({q: event.target.value})
    this.props.onVideoSearch(this.state.q);
  }

  render() {
    return (
      <Col className="search-bar" xs={12} md={8} mdOffset={2}>
        <form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.q}
              onChange={this.handleInputChange}
              placeholder="Search"
            />
          </FormGroup>
        </form>
      </Col>
    );
  }
}

export default SearchBar;