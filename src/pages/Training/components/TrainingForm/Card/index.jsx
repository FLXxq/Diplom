import React from  'react'
import {Card, Grid} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './style.css'


const MyCard = ({data, onClickCard, isModal}) => {
    const onClickCard1 = () => {
        onClickCard &&
        onClickCard({
            title: data.name,
            description: data.fullDescription,
            photo: data.photo
        })}
    return (
        <Card className="cards-style-training" onClick={onClickCard1}>
{/*                    <CardMedia className="training-photo"
                               component="img"
                               image={data.photo}
                               alt="Arnold"
                    />*/}
 {/*           <div className="div-tra">*/}
                    <CardContent className='cards-style-content-training'>
                        <Grid container direction={isModal ? "row" : "column"} wrap={"nowrap"} spacing={2}>
                            <Grid className="photo-grid" item>
                                <img className="training-photo" src={data.photo} alt="err"/>
                            </Grid>
                            <Grid item>
                                {data.name && <Typography className="training-name" gutterBottom variant="h5" component="div">
                                    {data.name}
                                </Typography>}
                                <Typography variant="body2" color="text.secondary">
                                    {data.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
{/*            </div>*/}
        </Card>
    );
};

export default MyCard;