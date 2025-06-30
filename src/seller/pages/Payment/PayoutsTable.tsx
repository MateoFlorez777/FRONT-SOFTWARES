import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { Order, OrderItem } from '../../../types/orderTypes';
import { fetchPayoutsBySeller } from '../../../Redux Toolkit/Seller/payoutSlice';

const PayoutsTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchPayoutsBySeller(localStorage.getItem("jwt") || ""));
  }, [dispatch]);

  return (
    <div>
    </div>
  )
}

export default PayoutsTable