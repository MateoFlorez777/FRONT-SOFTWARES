import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { fetchSellerSales, selectSellerSales } from "../../../Redux Toolkit/Seller/sellerSalesSlice";
import { CircularProgress, Typography, Box, Card, CardContent, Avatar, Stack, Button } from "@mui/material";

const SellerSales: React.FC = () => {
  const dispatch = useAppDispatch();
  const { soldItems, loading, error } = useAppSelector(selectSellerSales);

  // Estado local para manejar la paginación
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(3); // Mostrar 5 ítems por página

  // Calcular las páginas
  const totalPages = Math.ceil(soldItems.length / itemsPerPage);

  // Calcular los ítems a mostrar en la página actual
  const currentItems = soldItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    dispatch(fetchSellerSales());
  }, [dispatch]);

  // Funciones para manejar la paginación
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
      <Typography variant="h5" gutterBottom>Pagos Recibidos</Typography>

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      {!loading && !error && soldItems.length === 0 && (
        <Typography>No has recibido pagos todavía.</Typography>
      )}

      {!loading && !error && currentItems.length > 0 && (
        <>
          <Stack spacing={2}>
            {currentItems.map((item, index) => (
              <Card key={index} variant="outlined">
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={item.productImage} variant="square" sx={{ width: 56, height: 56 }} />
                    <Box>
                      <Typography>
                        ✅ Recibiste un pago de <strong>${item.price}</strong> por <strong>{item.productName}</strong> vía <strong>PayPal</strong>.
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Comprado por {item.buyerName || "Cliente desconocido"} el {item.orderDate || "Fecha desconocida"}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>

          {/* Botones de paginación */}
          <Box mt={2}>
            <Button variant="contained" onClick={prevPage} disabled={currentPage === 0}>
              Anterior
            </Button>
            <Button variant="contained" onClick={nextPage} disabled={currentPage === totalPages - 1} style={{ marginLeft: "10px" }}>
              Siguiente
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SellerSales;
