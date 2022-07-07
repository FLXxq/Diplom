import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.css'
import {Grid} from "@mui/material";

const CalculationForm = ({setData}) => {

    const [weight, setWeight] = React.useState("");
    const [height, setHeight] = React.useState("");
    const getResult = () => {

     const result = weight / (height * height)
        setData({
          imt: result,
          weight,
          height
        })
    }

    return (
            <form className='calculation-form'>
                <Grid container spacing={2}>
                    <Grid item>
                        <TextField
                            size={"small"}
                            type={"number"}
                            value={height}
                            onChange={(event) => {
                                setHeight(event.target.value)
                            }}
                            fullWidth
                            label="Ваш рост, м"
                            id="outlined-start-adornment"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            size={"small"}
                            value={weight}
                            onChange={(event) => {
                                setWeight(event.target.value)
                            }}
                            fullWidth
                            label="Ваш вес, кг"
                            id="outlined-start-adornment"
                            type={"number"}
                        />
                    </Grid>
                    <Grid item alignSelf={"center"}>
                        <Button
                            onClick={getResult}
                            variant="contained"
                        >
                            Расчитать
                        </Button>
                    </Grid>
                </Grid>
            </form>
    )
}
export default CalculationForm