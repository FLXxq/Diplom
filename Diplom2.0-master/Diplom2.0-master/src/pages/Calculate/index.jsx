import React, { useEffect, useMemo, useState } from "react";
import CalculationForm from "./components/CalculationForm";
import "./style.css";
import Header from "../../components/Header";
import CalculateTable from "./components/Table";
import { Grid, Typography } from "@mui/material";
import { allRows, getRow } from "../../constants/calculate";

const initialRows = allRows.map((value) => {
  return getRow(value);
});

const parseNumber = (string) => {
  if (!string) return null;
  return Number(string.replace(",", "."));
};

const Calculate = () => {
  const [currentImt, setCurrentImt] = useState({
    weight: null,
    height: null,
    imt: null,
  });
  const [rows, setRows] = useState(initialRows);

  useEffect(() => {
    if (Object.values(currentImt).every((i) => Boolean(i))) {
      const withActive = allRows.flatMap((item) => {
        if (
          Math.round(parseNumber(item[0]?.value)) ===
          Math.round(currentImt.weight)
        ) {
          return [
            item.map((item2) => {
              if (
                Math.round(parseNumber(item2.value)) ===
                Math.round(currentImt.imt)
              ) {
                return { ...item2, active: true };
              }

              return item2;
            }),
          ];
        }

        return [item];
      });

      setRows(withActive);
    }
  }, [currentImt]);

  const invalidResult = useMemo(() => {
    return (
      Object.values(currentImt).every((i) => Boolean(i)) &&
      rows.flat().filter((i) => i.active).length === 0
    );
  }, [currentImt, rows]);

  return (
    <Grid
      container
      sx={{ mt: 5 }}
      spacing={3}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Header content="Калькулятор ИМТ" />
      </Grid>
      <Grid item>
        <CalculationForm setData={setCurrentImt} />
      </Grid>
      <Grid item>
        {invalidResult ? (
          <Typography variant="h4" color="red">
            Нет результата, проверьте введенные данные
          </Typography>
        ) : (
          <CalculateTable rows={rows} />
        )}
      </Grid>
    </Grid>
  );
};

export default Calculate;
