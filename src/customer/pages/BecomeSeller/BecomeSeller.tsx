import { Alert, Button, Snackbar, Step, StepLabel, Stepper } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import SellerLoginForm from "./SellerLoginForm";
import { useLocation } from "react-router-dom";
/*import SellerAccountForm from "./SellerAccountForm";*/




const BecomeSeller = () => {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [isLoginPage, setIsLoginPage] = useState(false);
  const { sellerAuth } = useAppSelector(store => store)

  const handleCloseSnackbar = () => setSnackbarOpen(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {

    if (sellerAuth.sellerCreated || sellerAuth.error || sellerAuth.otpSent) {
      setSnackbarOpen(true);
      console.log("store ", sellerAuth.error)
    }

  }, [sellerAuth.sellerCreated, sellerAuth.error, sellerAuth.otpSent])

  return (
    <div className="grid md:gap-10 grid-cols-3 min-h-screen ">
      <section className="lg:col-span-1 md:col-span-2 col-span-3  p-10 shadow-lg rounded-b-md">


          <SellerLoginForm />

      </section>
      <section className=" hidden md:col-span-1 md:flex  lg:col-span-2  justify-center items-center">
        <div className="lg:w-[70%] px-5 space-y-10">
          <div className="borderr rounded-md space-y-2 font-bold text-center">
            <p className=" text-2xl">Únete a la Revolución de Ventas</p>
            <p className="text-lg text-teal-500">Aumenta tus ventas hoy</p>
          </div>


        </div>


      </section>


      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen} autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={sellerAuth.error ? "error" : "success"}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {sellerAuth.error ? sellerAuth.error : sellerAuth.sellerCreated ? sellerAuth.sellerCreated : "¡OTP enviado a tu correo electrónico!"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BecomeSeller;
