import React from 'react';
import VideoListItem from './video-list-item';
import {Grid, Row, Col, ListGroup} from 'react-bootstrap';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return (
    <Grid>
      <Row>
        <Col xs={4} md={4}>
          <ListGroup>
            {videoItems}
          </ListGroup>
        </Col>
      </Row>
    </Grid>
  );
}

export default VideoList;