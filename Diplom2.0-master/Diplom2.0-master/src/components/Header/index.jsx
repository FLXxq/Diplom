import React from 'react';
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";

const Header = ({content}) => {
    return (
        <Grid container marginBottom={2} justifyContent={"center"}>
            <Grid item>
                <Typography variant={"h3"}>
                    {content}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Header;