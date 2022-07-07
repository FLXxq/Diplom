import React, {useEffect, useMemo, useState} from "react";
import CalculationForm from "./components/CalculationForm";
import './style.css'
import Header from "../../components/Header";
import CalculateTable from "./components/Table";
import {Grid, Typography} from "@mui/material";
import {allRows, getRow} from "../../constants/calculate";

const initialRows = allRows.map(value => {
  return getRow(value)
});

const parseNumber = string => {
  if (!string) return null;
  return Number(string.replace(',', '.'));
};

const Calculate = () => {
    const [currentImt, setCurrentImt] = useState({
      weight: null,
      height: null,
      imt: null
    })
  const [rows, setRows] = useState(initialRows);

  useEffect(() => {
    if (Object.values(currentImt).every(i => Boolean(i))) {
      const withActive = allRows.flatMap(item => {

        if (Math.round(parseNumber(item[0]?.value)) === Math.round(currentImt.weight)) {
          return [item.map(item2 => {
            if (
              Math.round(parseNumber(item2.value)) === Math.round(currentImt.imt
              )) {
              return {...item2, active: true}
            }

            return item2
          })]
        }

        return [item]
      })

      setRows(withActive);
    }
  }, [currentImt]);

  const invalidResult = useMemo(() => {
    return (Object.values(currentImt).every(i => Boolean(i)) && rows.flat().filter(i => i.active).length === 0)
  }, [currentImt, rows])

    return (
        <Grid container spacing={3} direction="column" alignItems="center">
          <Grid item>
            <Header content='Калькулятор ИМТ' />
          </Grid>
            <Grid item>
              <CalculationForm setData={setCurrentImt} />
            </Grid>
            <Grid item className="text">
              {invalidResult ?
                <Typography variant="h4" color="red">Нет результата, проверьте введенные данные</Typography> :
                <CalculateTable rows={rows} />
              }
              <Grid className="description">
                <Typography className="one">
                  <p>ИМТ ≤ 18,5</p>
                  Дефицит массы тела. Недостаточная масса <br/>
                  тела может плохо отразиться как <br/>
                  на здоровье в целом, так и на состоянии <br/>
                  опорно-двигательного аппарата.
                </Typography>
                <Typography className="two">
                  <p>ИМТ от 18,5 до 24,9</p>
                  Нормальная масса тела. Продолжайте <br/>
                  придерживаться вашего рациона питания <br/>
                  и режима физической активности.
                </Typography>
                <Typography className="three">
                  <p>ИМТ от 25 до 29,9</p>
                  Избыток массы тела. Необходимо снизить <br/>
                  вес. Больше двигайтесь и уменьшите <br/>
                  калорийность питания.
                </Typography>
                <Typography className="four">
                  <p>ИМТ от 30 и более</p>
                  Ожирение. Необходимо как можно скорее <br/>
                  нормализовать массу тела. <br/>
                  Рекомендуется консультация специалиста.
                </Typography>
              </Grid>
            </Grid>
        </Grid>
    )
}

export default Calculate