import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { get } from '../../api';

const ListBrews = ({ navigate }) => {
  const [brews, setBrews] = useState([]);

  useEffect(() => {
    get('/brews')
      .then(res => {
        console.log(res);
        if (!res.detail) {
          //TODO: catch detail
          setBrews(res);
        }
      })
      .catch(err => console.warn(err));
  },[]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell>Ident</TableCell>
            <TableCell>Init Date</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Updates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {brews.map((brew) => (
            <TableRow
              key={brew.id}
              onClick={() => navigate(`./${brew.id}`)}
            >
              <TableCell align="right">
                {brew.id}
              </TableCell>
              <TableCell>{brew.ident}</TableCell>
              <TableCell>{brew.init_date}</TableCell>
              <TableCell>{brew.category}</TableCell>
              <TableCell align="right">{brew.updates.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListBrews;
