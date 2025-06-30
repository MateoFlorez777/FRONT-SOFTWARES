import * as React from "react";


import DrawerList from "../../admin seller/components/drawerList/DrawerList";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { Category } from "@mui/icons-material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
const menu = [
    {
        name: "Panel de control",
        path: "/admin",
        icon: <DashboardIcon className="text-primary-color" />,
        activeIcon: <DashboardIcon className="text-white" />,
    },
    {
        name: "Cupones",
        path: "/admin/coupon",
        icon: <IntegrationInstructionsIcon className="text-primary-color" />,
        activeIcon: <IntegrationInstructionsIcon className="text-white" />,
    },
    {
        name: "Agregar nuevo cupón",
        path: "/admin/add-coupon",
        icon: <AddIcon className="text-primary-color" />,
        activeIcon: <AddIcon className="text-white" />,
    },
    {
        name: "Página de inicio",
        path: "/admin/home-grid",
        icon: <HomeIcon className="text-primary-color" />,
        activeIcon: <HomeIcon className="text-white" />,
    }
   
];

const menu2 = [

    {
        name: "Cerrar sesión",
        path: "/",
        icon: <LogoutIcon className="text-primary-color" />,
        activeIcon: <LogoutIcon className="text-white" />,
    },

]

interface DrawerListProps{
    toggleDrawer?:any;
}

const AdminDrawerList = ({ toggleDrawer }: DrawerListProps) => {

    return (
        <>
            <DrawerList toggleDrawer={toggleDrawer} menu={menu} menu2={menu2}/>
        </>
    );
}; 

export default AdminDrawerList;
