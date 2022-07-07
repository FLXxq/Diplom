import React from "react";
import YouTube from "react-youtube";

import { Box, Grid, Typography } from "@mui/material";
import Header from "../../components/Header";

const VIDEOS_DATA = [
    "iA9tdJmIFJU",
    "Lrrl2Mhka8U",
    "B44jixhL1LA",
    "TDyF3nNy7mE",
    "uY0TBpwnWaQ",
    "WEuk-FdiFcQ",
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
            <Header content="Видео тренировки " />
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
