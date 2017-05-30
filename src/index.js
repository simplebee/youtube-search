import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));