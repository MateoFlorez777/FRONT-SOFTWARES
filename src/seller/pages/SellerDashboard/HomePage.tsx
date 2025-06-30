import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { fetchSellerSales } from "../../../Redux Toolkit/Seller/sellerSalesSlice";
import ReportCard from "./Report/ReportCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import {
  Box,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const HomePage = () => {
  const { totalEarnings, totalSales, loading, error } = useAppSelector(
    (store) => store.sellerSales
  );
  const dispatch = useAppDispatch();
  const [chartType, setChartType] = React.useState("today");

  useEffect(() => {
    dispatch(fetchSellerSales());
  }, [dispatch]);

  const handleChange = (event: SelectChangeEvent) => {
    setChartType(event.target.value as string);
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex justify-center items-start mt-40">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-4">
        <div className="flex justify-center">
          <ReportCard
            icon={<AccountBalanceIcon fontSize="large" />}
            value={"$" + totalEarnings.toFixed(2)} // Mostrar ganancias totales
            title={"Ganancias Totales"}
          />
        </div>
        <div className="flex justify-center">
          <ReportCard
            icon={<AccountBalanceIcon fontSize="large" />}
            value={totalSales} // Mostrar ventas totales
            title={"Ventas Totales"}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
