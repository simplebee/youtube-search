import React from 'react';
import {Grid, Row, Col, ResponsiveEmbed} from 'react-bootstrap';

const VideoPlayer = ({video}) => {
  if (!video) {
    return (<div>Loading</div>);
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const title = video.snippet.title;
  const description = video.snippet.description;

  return (
    <Grid>
      <Row>
        <Col xs={10} md={10}>
          <ResponsiveEmbed a16by9>
            <iframe src={url} title={title} allowFullScreen></iframe>
          </ResponsiveEmbed>

          <div>{title}</div>
          <div>{description}</div>
        </Col>
      </Row>
    </Grid>
  );
}
export default VideoPlayer;