import { useLocation } from "react-router-dom"
import { useEffect } from "react";

// Main Layout
import MainLayout from '../layouts/MainLayout'

function Musik(){

    const location = useLocation();

    useEffect(() => {
        console.log('Current Route:', location.pathname);
    })

    return (

        <MainLayout>

        <h1>{location.pathname.replace('/', '')}</h1>

      </MainLayout>

    )
}

export default Musik