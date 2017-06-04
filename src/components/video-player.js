import React from 'react';
import {Col, ResponsiveEmbed, Panel} from 'react-bootstrap';

const VideoPlayer = ({video}) => {
  if (!video) {
    return (<div>Loading</div>);
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const title = video.snippet.title;
  const description = video.snippet.description;

  return (
    <Col md={8}>
      <Panel>
        <ResponsiveEmbed a16by9>
          <iframe src={url} title={title} allowFullScreen></iframe>
        </ResponsiveEmbed>
      </Panel>
      <Panel>
        <h3>{title}</h3>
        <p>{description}</p>
      </Panel>
    </Col>
  );
}
export default VideoPlayer;