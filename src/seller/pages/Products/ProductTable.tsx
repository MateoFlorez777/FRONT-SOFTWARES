import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, IconButton, styled, TableFooter, TablePagination } from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { fetchSellerProducts, updateProductStock } from '../../../Redux Toolkit/Seller/sellerProductSlice';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ProductTable() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { sellerProduct } = useAppSelector(store => store);

  const [currentPage, setCurrentPage] = React.useState(0);
  const itemsPerPage = 3;

  const rows = sellerProduct.products;
  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const currentItems = rows.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  React.useEffect(() => {
    dispatch(fetchSellerProducts(localStorage.getItem("jwt")));
  }, [dispatch]);

  const handleUpdateStock = (id: number | undefined) => () => {
    dispatch(updateProductStock(id));
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <h1 className='pb-5 font-bold text-xl'>Productos</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Imagen</StyledTableCell>
              <StyledTableCell align="right">Título</StyledTableCell>
              <StyledTableCell align="right">Precio Sugerido</StyledTableCell>
              <StyledTableCell align="right">Precio de Venta</StyledTableCell>
              <StyledTableCell align="right">Color</StyledTableCell>
              <StyledTableCell align="right">Actualizar Stock</StyledTableCell>
              <StyledTableCell align="right">Actualizar</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currentItems.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  <div className='flex gap-1 flex-wrap'>
                    {item.images.map((image, idx) => (
                      <img key={idx} className='w-20 rounded-md' src={image} alt="" />
                    ))}
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">{item.title}</StyledTableCell>
                <StyledTableCell align="right">${item.mrpPrice}.0</StyledTableCell>
                <StyledTableCell align="right">${item.sellingPrice}.0</StyledTableCell>
                <StyledTableCell align="right">{item.color}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={handleUpdateStock(item.id)} size='small'>
                    {item.in_stock ? "en existencia" : "sin existencia"}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    onClick={() => navigate("/seller/update-product/" + item.id)}
                    color='primary'
                    className='bg-primary-color'
                  >
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Paginación manual abajo */}
      <Box mt={2}>
        <Button variant="contained" onClick={prevPage} disabled={currentPage === 0}>
          Anterior
        </Button>
        <Button
          variant="contained"
          onClick={nextPage}
          disabled={currentPage >= totalPages - 1}
          style={{ marginLeft: "10px" }}
        >
          Siguiente
        </Button>
      </Box>
    </>
  );
}