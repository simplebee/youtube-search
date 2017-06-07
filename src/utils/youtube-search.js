import axios from 'axios';

function youtubeSearch(options, callback) {
  const URL = 'https://www.googleapis.com/youtube/v3/search';
  let params = {
    part: 'snippet',
    key: options.key,
    q: options.q,
    type: 'video'
  };

  if (!options.key) {
    throw new Error('No youtube api key');
  }

  axios.get(URL, {params: params})
    .then(function(response) {
      if (callback) {
        callback(response.data.items);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
}

export default youtubeSearch;