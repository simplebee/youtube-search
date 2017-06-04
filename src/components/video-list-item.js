import React from 'react';
import {ListGroupItem, Media} from 'react-bootstrap';

const VideoListItem = ({video}) => {
  const imgurl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <ListGroupItem>
      <Media>
        <Media.Left>
          <img src={imgurl} alt={title} />
        </Media.Left>

        <Media.Body>
          <Media.Heading>{title}</Media.Heading>
        </Media.Body>
      </Media>
    </ListGroupItem>
  );
}

export default VideoListItem;