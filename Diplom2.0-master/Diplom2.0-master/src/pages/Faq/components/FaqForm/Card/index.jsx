import React from 'react';
import {Card} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import './style.css'


const MyCard = ({data, onClickCard}) => {
    const onClickCard1 = () => {
        onClickCard &&
        onClickCard({
            title: data.name,
            description: data.fullDescription,
            photo: data.photo
        })}
    return (
        <Card className="card-style" onClick={onClickCard1}>
            <CardMedia className="photo"
            component="img"
                image={data.photo}
                alt="Arnold"
            />
            <CardContent className='card-style-content'>
                {data.name && <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                </Typography>}
                <Typography variant="body2" color="text.secondary">
                    {data.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MyCard;