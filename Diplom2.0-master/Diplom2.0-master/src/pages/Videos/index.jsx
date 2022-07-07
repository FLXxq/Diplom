import React from "react";
import YouTube from "react-youtube";

import { Box, Grid, Typography } from "@mui/material";
import Header from "../../components/Header";

const VIDEOS_DATA = [
  "nJ_b4VDbmmk",
  "JkaxUblCGz0",
  "evNysnWaA3A",
  "JG1n8wKT3Ls",
  "hyau4Pl7Sqk",
  "U1q99Wr6nE0",
];

const Videos = () => {
  const opts = {
    height: "340",
    width: "550",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <Header content="Видео" />
      <Typography>Zivem</Typography>
      <Grid container gap={2} justifyContent="center">
        {VIDEOS_DATA.map((url, index) => (
          <Box>
            <Grid key={index} item xs={3}>
              <YouTube
                videoId={url}
                opts={opts}
                onReady={(e) => e.target.pauseVideo()}
              />
            </Grid>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default Videos;
