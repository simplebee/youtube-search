import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoPlayer from './components/video-player';
import VideoList from './components/video-list';
import youtubeSearch from './utils/youtube-search';
import {Grid, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';


class App extends Component {
  constructor(props) {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    super(props);
    this.state = {videos: []};
    youtubeSearch({key: API_KEY, q:'cat'}, (videos) => {
      this.setState({videos});
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <SearchBar />
        </Row>
        <Row>
          <VideoPlayer video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos} />
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));