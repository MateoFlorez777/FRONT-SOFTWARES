import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { fetchSellerSales, selectSellerSales } from "../../../Redux Toolkit/Seller/sellerSalesSlice";
import { CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Button, Box, Typography } from "@mui/material";

const SellerSales: React.FC = () => {
  const dispatch = useAppDispatch();
  const { soldItems, loading, error } = useAppSelector(selectSellerSales);

  // Estado local para controlar la paginación
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(3); // Mostrar 5 items por página

  // Calcular el total de páginas
  const totalPages = Math.ceil(soldItems.length / itemsPerPage);

  // Calcular los ítems que deben mostrarse en la página actual
  const currentItems = soldItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Al montar el componente, cargar las ventas
  useEffect(() => {
    dispatch(fetchSellerSales());
  }, [dispatch]);

  // Funciones para navegar entre páginas
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Historial de Ventas</Typography>

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      {!loading && !error && soldItems.length === 0 && (
        <Typography>No hay ventas registradas.</Typography>
      )}

      {!loading && !error && currentItems.length > 0 && (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Imagen</TableCell>
                <TableCell>Producto</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Tamaño</TableCell>
                <TableCell>Precio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img src={item.productImage} alt={item.productName} width="50" height="50" />
                  </TableCell>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>${item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box mt={2}>
            <Button
              variant="contained"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              Anterior
            </Button>
            <Button
              variant="contained"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              style={{ marginLeft: "10px" }}
            >
              Siguiente
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SellerSales;
