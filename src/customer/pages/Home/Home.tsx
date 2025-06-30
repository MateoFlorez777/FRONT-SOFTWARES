import React, { useState } from 'react'
import Banner from './Banner/Banner'
import TopBrand from './TopBrands/Grid'
import ElectronicCategory from './Electronic Category/ElectronicCategory'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Backdrop, Button, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useAppSelector } from '../../../Redux Toolkit/Store'
import DealSlider from './Deals/Deals'



const Home = () => {
    const [showChatBot, setShowChatBot] = useState(false)
    const { homePage } = useAppSelector(store => store)
    const navigate = useNavigate();

    const handleShowChatBot = () => {
        setShowChatBot(!showChatBot)
    }
    const handleCloseChatBot = () => {
        setShowChatBot(false)
    }
    const becomeSellerClick = () => {
        navigate("/become-seller")
    }
    return (
        <>
        {(!homePage.loading)?<div className='space-y-5 lg:space-y-10 relative'>
                       {homePage.homePageData?.shopByCategories && <section className='flex flex-col justify-center items-center py-5 px-5 lg:px-20'>
                
            </section>}


          {homePage.homePageData?.grid &&  <section >
                {/* <h1 className='text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-20 text-center'>SHOP FOR WEDDING</h1> */}
                <TopBrand />
            </section>}
        {homePage.homePageData?.deals &&    <section className='pt-10'>
            <h1 className='text-center text-lg lg:text-4xl font-bold text-[#00927c] pb-5 lg:pb-5'>Cada venta es el inicio de una relación duradera</h1>
            </section>}
            <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
                <img className='w-full h-full' src={"/seller_banner_image.jpg"} alt="" />
                <div className='absolute top-1/2 left-4 lg:left-[15rem] transform  -translate-y-1/2 font-semibold lg:text-4xl space-y-3 '>
                    <h1 className=''>
                        Vende tus productos en línea
                    </h1>
                    <p className='text-lg md:text-2xl'>con <strong className='text-3xl md:text-5xl pl-2'>Software - S</strong></p>

                    <div className='pt-6 flex justify-center'>
                        <Button
                            onClick={becomeSellerClick}
                            startIcon={<StorefrontIcon />}
                            variant="contained"
                        >
                            inicia como vendedor
                        </Button>
                    </div>

                </div>

            </section>


    


        </div>: <Backdrop
                open={true}

            >
                <CircularProgress color="inherit" />
            </Backdrop>}
       
        </>
        
    )
}

export default Home