import * as React from "react";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
/*import photo1 from '../../photo/Arni.jpg'
import photo2 from '../../photo/Hardi.jpg'*/
import { Grid } from "@mui/material";
import "./style.css";

const TrainingForm = () => {
  return (
    <form className="training-form">
      <Grid container direction="row">
        <Grid item>
          <Card>
            <Grid container>
              <Grid item xs={6}>
                <CardMedia
                  component="img"
                  /*image={photo1}*/
                  alt="err"
                />
              </Grid>
              <Grid item xs={6}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Заголовок тренировки
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Описание тренировки
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Развернуть</Button>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item>
          <Card>
            <Grid container>
              <Grid item xs={6}>
                <CardMedia
                  component="img"
                  /*image={photo2}*/
                  alt="err"
                />
              </Grid>
              <Grid item xs={6}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Заголовок тренировки
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Описание тренировки
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Развернуть</Button>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
};

export default TrainingForm;
