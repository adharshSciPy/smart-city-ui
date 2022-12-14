import React from 'react'
import Table  from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function TableComponent() {
    
    const rows = [
        {
            id: 1,
            date: '01-May-2022',
            fileName: 'Video 1.mp4',
            report : 'True'
        },
        {
            id: 2,
            date: '02-May-2022',
            fileName: 'Video 2.mp4',
            report : 'False'
        },
        {
            id: 3,
            date: '03-May-2022',
            fileName: 'Video 3.mp4',
            report : 'True'
        },
        {
            id: 4,
            date: '04-May-2022',
            fileName: 'Video 4.mp4',
            report : 'False'
        },
        {
            id: 5,
            date: '05-May-2022',
            fileName: 'Video 5.mp4',
            report : 'True'
        }

    ]
    
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>All your history will charted above</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">File Name</TableCell>
                            <TableCell align="center">Report</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, val) => (
                            <TableRow key={val}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">{row.fileName}</TableCell>
                                <TableCell align="center">{row.report}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableComponent