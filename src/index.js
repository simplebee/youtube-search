import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import youtubeSearch from './utils/youtube-search';
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
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));