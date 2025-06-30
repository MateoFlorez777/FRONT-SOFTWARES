import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import { UpdateDetailsFormProps } from "./BussinessDetailsForm";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { updateSeller } from "../../../Redux Toolkit/Seller/sellerSlice";

const BankDetailsForm = ({ onClose }: UpdateDetailsFormProps) => {
  const { sellers } = useAppSelector((store) => store);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      accountHolderName: "",
      accountNumber: "",
      ifscCode: "",
    },
    validationSchema: Yup.object({
      accountHolderName: Yup.string().required(
        "Se requiere el nombre del titular de la cuenta"
      ),
      accountNumber: Yup.string().required("Se requiere el número de cuenta"),
      ifscCode: Yup.string().required("Se requiere el código IFSC"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        updateSeller({
          bankDetails: values,
         
        })
      );
      onClose();
    },
  });

  useEffect(() => {
    if (sellers.profile) {
      formik.setValues({
        accountHolderName: sellers.profile.bankDetails?.accountHolderName || "",
        accountNumber: sellers.profile.bankDetails?.accountNumber || "",
        ifscCode: sellers.profile.bankDetails?.ifscCode || "",
      });
    }
  }, [sellers.profile]);

  return (
    <>
      <h1 className="text-xl pb-5 text-center font-bold text-gray-600">
        Bank Details
      </h1>
      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="accountHolderName"
          name="accountHolderName"
          label="Nombre del titular de la cuenta"
          value={formik.values.accountHolderName}
          onChange={formik.handleChange}
          error={
            formik.touched.accountHolderName &&
            Boolean(formik.errors.accountHolderName)
          }
          helperText={
            formik.touched.accountHolderName && formik.errors.accountHolderName
          }
        />
        <TextField
          fullWidth
          id="accountNumber"
          name="accountNumber"
          label="Número de cuenta"
          value={formik.values.accountNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.accountNumber && Boolean(formik.errors.accountNumber)
          }
          helperText={
            formik.touched.accountNumber && formik.errors.accountNumber
          }
        />
        <TextField
          fullWidth
          id="ifscCode"
          name="ifscCode"
          label="Código de la sucursal bancaria"
          value={formik.values.ifscCode}
          onChange={formik.handleChange}
          error={formik.touched.ifscCode && Boolean(formik.errors.ifscCode)}
          helperText={formik.touched.ifscCode && formik.errors.ifscCode}
        />
        <Button
          sx={{ py: ".9rem" }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default BankDetailsForm;
