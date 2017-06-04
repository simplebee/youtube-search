import React from 'react';
import VideoListItem from './video-list-item';
import {Col, ListGroup} from 'react-bootstrap';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return (
    <Col md={4}>
      <ListGroup>
        {videoItems}
      </ListGroup>
    </Col>
  );
}

export default VideoList;