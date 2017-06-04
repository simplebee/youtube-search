import React, {Component} from 'react';
import {Col, FormGroup, FormControl} from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {q: ''};
  }
  render() {
    return (
      <Col xs={12}>
        <form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.q}
              onChange={(event) => this.setState({q: event.target.value})}
              placeholder="Search"
            />
          </FormGroup>
        </form>
      </Col>
    );
  }
}

export default SearchBar;