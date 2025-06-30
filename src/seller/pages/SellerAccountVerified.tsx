import { Alert, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SellerAccountVerified = () => {
    const navigate = useNavigate()
    return (
        <div className='h-[80vh] flex flex-col justify-center items-center space-y-3'>

            <Alert variant="filled" severity="success">
                Su correo electrónico se verificó correctamente
            </Alert>
            <div>
                <Button variant='contained' onClick={() => navigate("/become-seller")}>
                    Inicio como Vendedor
                </Button>
            </div>

        </div>
    )
}

export default SellerAccountVerified