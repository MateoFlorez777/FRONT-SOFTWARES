import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import { UpdateDetailsFormProps } from "./BussinessDetailsForm";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { updateSeller } from "../../../Redux Toolkit/Seller/sellerSlice";

const PersonalDetailsForm = ({ onClose }: UpdateDetailsFormProps) => {
    const { sellers } = useAppSelector(store => store)
    const dispatch=useAppDispatch();

    const formik = useFormik({
        initialValues: {
            sellerName: '',
            email: '',
            mobile: '',
        },
        validationSchema: Yup.object({
            sellerName: Yup.string().required("Se requiere el nombre del vendedor"),
            email: Yup.string().email("Dirección de correo electrónico no válida").required("Se requiere el correo electrónico"),
            mobile: Yup.string().required("Se requiere el número de móvil"),
        }),
        onSubmit: (values) => {
            
            console.log("data ----- ",values);
            dispatch(updateSeller(values))
            onClose()
        },
    });

    useEffect(() => {

        if (sellers.profile) {
            formik.setValues({
                sellerName: sellers.profile?.sellerName,
                email: sellers.profile?.email,
                mobile: sellers.profile?.mobile,

            })
        }

    }, [sellers.profile])

    return (
        <>
            <h1 className="text-xl pb-5 text-center font-bold text-gray-600">
                Personal Details
            </h1>
            <form className="space-y-5" onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="sellerName"
                    name="sellerName"
                    label="Nombre del vendedor"
                    value={formik.values.sellerName}
                    onChange={formik.handleChange}
                    error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
                    helperText={formik.touched.sellerName && formik.errors.sellerName}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Correo electrónico del vendedor"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="mobile"
                    name="mobile"
                    label="Número de móvil del vendedor"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                    helperText={formik.touched.mobile && formik.errors.mobile}
                />
                <Button sx={{ py: ".9rem" }} color="primary" variant="contained" fullWidth type="submit">
                    Guardar
                </Button>
            </form>
        </>

    );
};

export default PersonalDetailsForm;
