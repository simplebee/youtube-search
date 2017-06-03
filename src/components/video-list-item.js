import React from 'react';
import {ListGroupItem, Media} from 'react-bootstrap';

const VideoListItem = (props) => {
  const imgurl = props.video.snippet.thumbnails.default.url;
  const title = props.video.snippet.title;
  const description = props.video.snippet.description;

  return (
    <ListGroupItem>
      <Media>
        <Media.Left>
          <img src={imgurl} alt={title} />
        </Media.Left>

        <Media.Body>
          <Media.Heading>{title}</Media.Heading>
          <p>{description}</p>
        </Media.Body>
      </Media>
    </ListGroupItem>
  );
}

export default VideoListItem;