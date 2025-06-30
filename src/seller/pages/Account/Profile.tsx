import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Divider,
  Modal,
  Snackbar,
} from "@mui/material";
import ProfileFildCard from "./ProfileFildCard";
import EditIcon from "@mui/icons-material/Edit";
import PersonalDetailsForm from "./PersionalDetailsForm";
import BusinessDetailsForm from "./BussinessDetailsForm";
import PickupAddressForm from "./PickupAddressForm";
import BankDetailsForm from "./BankDetailsForm";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  const { sellers } = useAppSelector((store) => store);
  const [open, setOpen] = React.useState(false);
  const [selectedForm, setSelectedForm] = useState("persionalDetails");
  const handleClose = () => setOpen(false);
  const [snackbarOpen, setOpenSnackbar] = useState(false);

  const handleOpen = (formName: string) => {
    setOpen(true);
    setSelectedForm(formName);
  };

  const renderSelectedForm = () => {
    switch (selectedForm) {
      case "personalDetails":
        return <PersonalDetailsForm onClose={handleClose} />;
      case "businessDetails":
        return <BusinessDetailsForm onClose={handleClose} />;
      case "pickupAddress":
        return <PickupAddressForm onClose={handleClose} />;
      case "bankDetails":
        return <BankDetailsForm onClose={handleClose} />;
      default:
        return null;
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (sellers.profileUpdated || sellers.error) {
      setOpenSnackbar(true);
    }
  }, [sellers.profileUpdated]);

  return (
    <div className="lg:p-20 space-y-20">
      <div className="w-full lg:w-[70%]  ">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600 ">
            Detalles personales
          </h1>
          <div>
            <Button
              onClick={() => handleOpen("personalDetails")}
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              variant="contained"
              className="w-16 h-16"
            >
              <EditIcon />
            </Button>
          </div>
        </div>
        <div className="space-y-5">
          <Avatar
            sx={{ width: "10rem", height: "10rem" }}
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
          />
          <div>
            <ProfileFildCard
              keys={"Nombre del vendedor"}
              value={sellers.profile?.sellerName}
            />
            <Divider />
            <ProfileFildCard
              keys={"Correo del vendedor"}
              value={sellers.profile?.email}
            />
            <Divider />
            <ProfileFildCard
              keys={"Móvil del vendedor"}
              value={sellers.profile?.mobile}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600 ">
            Detalles del negocio
          </h1>
          <div>
            <Button
              onClick={() => handleOpen("businessDetails")}
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              variant="contained"
              className="w-16 h-16"
            >
              <EditIcon />
            </Button>
          </div>
        </div>

        <div className=" ">
          <ProfileFildCard
            keys={"Nombre del negocio / Nombre de la marca"}
            value={sellers.profile?.businessDetails?.businessName}
          />
          <Divider />
          <ProfileFildCard
            keys={"NIP"}
            value={sellers.profile?.gstin || "no proporcionado"}
          />
          <Divider />
          <ProfileFildCard
            keys={"Estado de la cuenta"}
            value={sellers.profile?.accountStatus}
          />
        </div>
      </div>
      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600 ">Dirección de recogida</h1>
          <div>
            <Button
              onClick={() => handleOpen("pickupAddress")}
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              variant="contained"
              className="w-16 h-16"
            >
              <EditIcon />
            </Button>
          </div>
        </div>
        <div className="space-y-5">
          <div className="">
            <ProfileFildCard
              keys={"Dirección"}
              value={sellers.profile?.pickupAddress?.address}
            />
            <Divider />
            <ProfileFildCard
              keys={"Ciudad"}
              value={sellers.profile?.pickupAddress?.city || "no proporcionado"}
            />
            <Divider />
            <ProfileFildCard
              keys={"Estado"}
              value={sellers.profile?.pickupAddress?.state}
            />
            <Divider />
            <ProfileFildCard
              keys={"Número de móvil"}
              value={sellers.profile?.pickupAddress?.mobile}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600 ">Detalles del banco</h1>
          <div>
            <Button
              onClick={() => handleOpen("bankDetails")}
              size="small"
              sx={{ borderRadius: "2.9rem" }}
              variant="contained"
              className="w-16 h-16"
            >
              <EditIcon />
            </Button>
          </div>
        </div>
        <div className="space-y-5">
          <div className="">
            <ProfileFildCard
              keys={"Nombre del titular de la cuenta"}
              value={sellers.profile?.bankDetails?.accountHolderName}
            />
            <Divider />
            <ProfileFildCard
              keys={"Número de cuenta"}
              value={
                sellers.profile?.bankDetails?.accountNumber || "No proporcionado"
              }
            />
            <Divider />
            <ProfileFildCard
              keys={"Código de la sucursal bancaria"}
              value={sellers.profile?.bankDetails?.ifscCode}
            />
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{renderSelectedForm()}</Box>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={sellers.error ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {sellers.error ? sellers.error : "Perfil actualizado con éxito"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Profile;
