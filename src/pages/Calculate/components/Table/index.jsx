import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {heading} from "../../../../constants/calculate";

const CalculateTable = ({rows}) => {


    return (
        <TableContainer component={Paper}  style={{width: 'auto'}}>
            <Table size={"small"} sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {heading.map((value, index) => {
                            return <TableCell key={index} align={index !== 0 ? "right" : "left"}>{value}</TableCell>
                        } )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => {

                        return (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {Object.values(row).map((item, index)=> {
                                  const isActive = item.active ? {
                                    border: '1px solid black',
                                    background: 'white',
                                    color: 'black'
                                  } : {};
                                    return (
                                      <TableCell
                                        key={item.value}
                                        style={{
                                          background: item.background,
                                          color: item.color,
                                          ...isActive
                                      }}
                                        component={index === 0 && "th"}
                                      >
                                          {item.value}
                                      </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CalculateTable;