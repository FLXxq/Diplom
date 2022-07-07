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
                                {/*<TableCell*/}
                                {/*    style={{*/}
                                {/*        background: row.el1?.background,*/}
                                {/*        color: row.el1?.color*/}
                                {/*    }}*/}
                                {/*    component="th"*/}
                                {/*    scope="row"*/}
                                {/*>*/}
                                {/*    {row?.el1?.value}*/}
                                {/*</TableCell>*/}
                                {/*<TableCell */}
                                {/*  style={{*/}
                                {/*    background: row.el2?.background,*/}
                                {/*    color: row.el2?.color*/}
                                {/*}} */}
                                {/*  align="right"*/}
                                {/*>{row.el2?.value}</TableCell>*/}
                                {/*<TableCell */}
                                {/*  style={{*/}
                                {/*      background: row.el3?.background,*/}
                                {/*      color: row.el3?.color*/}
                                {/*  }} */}
                                {/*  align="right"*/}
                                {/*>*/}
                                {/*    {row.el3?.value}*/}
                                {/*</TableCell>*/}
                                {/*<TableCell*/}
                                {/*  style={{*/}
                                {/*      background: row.el4?.background,*/}
                                {/*      color: row.el4?.color*/}
                                {/*  }}*/}
                                {/*  align="right"*/}
                                {/*>{row.el4?.value}</TableCell>*/}
                                {/*<TableCell*/}
                                {/*  style={{*/}
                                {/*      background: row.el5?.background,*/}
                                {/*      color: row.el5?.color*/}
                                {/*  }}*/}
                                {/*  align="right"*/}
                                {/*>{row.el5?.value}</TableCell>*/}
                                {/*<TableCell*/}
                                {/*  style={{*/}
                                {/*      background: row.el6?.background,*/}
                                {/*      color: row.el6?.color*/}
                                {/*  }}*/}
                                {/*  align="right"*/}
                                {/*>{row.el6?.value}</TableCell>*/}
                                {/*<TableCell*/}
                                {/*  style={{*/}
                                {/*      background: row.el7?.background,*/}
                                {/*      color: row.el7?.color*/}
                                {/*  }}*/}
                                {/*  align="right"*/}
                                {/*>{row.el7?.value}</TableCell>*/}
                                {/*<TableCell*/}
                                {/*  style={{*/}
                                {/*      background: row.el8?.background,*/}
                                {/*      color: row.el8?.color*/}
                                {/*  }}*/}
                                {/*  align="right"*/}
                                {/*>{row.el8?.value}</TableCell>*/}
                                {/*<TableCell*/}
                                {/*  style={{background: row.el9?.background, color: row.el9?.color}}*/}
                                {/*  align="right"*/}
                                {/*>{row.el9?.value}</TableCell>*/}
                                {/*<TableCell*/}
                                {/*  style={{background: row.el10?.background, color: row.el10?.color}}*/}
                                {/*  align="right"*/}
                                {/*>{row.el10?.value}</TableCell>*/}
                                {/*<TableCell*/}
                                {/*  style={{background: row.el11?.background, color: row.el11?.color}}*/}
                                {/*  align="right"*/}
                                {/*>{row.el11?.value}</TableCell>*/}
                                {/*<TableCell*/}
                                {/*  style={{background: row.el12?.background, color: row.el12?.color}}*/}
                                {/*  align="right"*/}
                                {/*>{row.el12?.value}</TableCell>*/}
                                {/*<TableCell*/}
                                {/*  style={{background: row.el13?.background, color: row.el13?.color}}*/}
                                {/*  align="right"*/}
                                {/*>{row.el13?.value}</TableCell>*/}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CalculateTable;