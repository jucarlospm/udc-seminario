"use client";
import { Alert, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

// Definimos los estados posibles para la búsqueda
enum SearchState {
  INITIAL,
  LOADING,
  SUCCESS,
  ERROR,
}

export default function Home() {
  const [searchState, setSearchState] = useState(SearchState.INITIAL);
  const [cemeteryInfo, setCemeteryInfo] = useState([]) as any;
  const [pageSize, setPageSize] = useState(10);

  const handleSearch = async () => {
    try {
      // Cambiamos el estado a "Cargando"
      setSearchState(SearchState.LOADING);

      // Simulación de búsqueda en una base de datos
      const response = await axios.get(
        `https://random-data-api.com/api/v2/users?size=${pageSize}`
      );
      const data = await response.data;
      // Si se encuentra la información, actualizamos el estado a "Éxito"
      if (data.length) {
        setCemeteryInfo(data);
        setSearchState(SearchState.SUCCESS);
      } else {
        // Si no se encuentra la información, actualizamos el estado a "Error"
        setSearchState(SearchState.ERROR);
      }
    } catch (error) {
      // Manejo de errores, actualizamos el estado a "Error"
      setSearchState(SearchState.ERROR);
    }
  };

  return (
    <Container maxWidth="sm">
      <h1>Buscador de Fallecidos en Cementerios de Colombia</h1>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Cantidad ha listar</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value as string))}
          label="Age"
        >
          <MenuItem value={5}>5 por página</MenuItem>
          <MenuItem value={20}>20 por página</MenuItem>
          <MenuItem value={50}>50 por página</MenuItem>
          <MenuItem value={-1}>-1 por página (Error)</MenuItem>
        </Select>
        <Button variant="contained"  onClick={handleSearch}>Buscar</Button>
      </FormControl>
      {searchState === SearchState.INITIAL && <Alert severity="info">Eligue en el selector cuantos usuarios quieres traer. Ojo hay uno que aun esta en QA</Alert>}
      {searchState === SearchState.LOADING && <p>Buscando... <CircularProgress /></p>}
      {searchState === SearchState.SUCCESS && (
        <TableContainer component={Paper}>
        <Table size="small"  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Apellido</TableCell>
              <TableCell align="right">Fecha de nacido</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cemeteryInfo.map((user: any, index: number) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {user.first_name}
                </TableCell>
                <TableCell align="right">{user.last_name}</TableCell>
                <TableCell align="right">{user.date_of_birth}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      )}
      {searchState === SearchState.ERROR && <Alert severity="error">Algo ha fallado, no se ha podido hacer la consulta</Alert>}
    </Container>
  )
}
