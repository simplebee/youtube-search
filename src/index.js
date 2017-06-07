import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash.debounce';
import SearchBar from './components/search-bar';
import VideoPlayer from './components/video-player';
import VideoList from './components/video-list';
import youtubeSearch from './utils/youtube-search';
import {Grid, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';


class App extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    
    this.onVideoSearch = this.onVideoSearch.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);

    this.onVideoSearch('cat');
  }

  onVideoSearch(q) {
    const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    youtubeSearch({key: API_KEY, q:q}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  onVideoSelect(selectedVideo) {
    this.setState({selectedVideo});
  }

  render() {
    const throttleSearch = debounce(this.onVideoSearch, 500);

    return (
      <Grid>
        <Row>
          <SearchBar onVideoSearch={throttleSearch} />
        </Row>
        <Row>
          <VideoPlayer video={this.state.selectedVideo}/>
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));