import React from "react";
import { Paper, Typography } from "@material-ui/core";
const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  console.log(video);
  const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={4} style={{ height: "40%", borderRadius: "0.625rem" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Player"
          src={videoURL}
          style={{
            borderTopLeftRadius: "0.625rem",
            borderTopRightRadius: "0.625rem",
          }}
        />
      </Paper>
      <Paper
        elevation={6}
        style={{
          padding: "15px",
          borderBottomLeftRadius: "0.625rem",
          borderBottomRightRadius: "0.625rem",
        }}
      >
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};
export default VideoDetail;
