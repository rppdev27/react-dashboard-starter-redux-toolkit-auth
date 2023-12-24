import { useState, useEffect } from 'react'
import '../App.css'
import { useLocation } from "react-router-dom"
import Sidebarmenu from '../components/Sidebarmenu'

import AOS from 'aos'
import 'aos/dist/aos.css'


function Main({children}){

    const location = useLocation();

    useEffect(() => {
        AOS.init();
    }, [])

    return(

        <div className='mx-auto w-full min-h-screen bg-[white]'>
            <div className='flex flex-col lg:grid lg:grid-cols-10'>
                
                    {/* Sidebar Menu */}
                    <Sidebarmenu/>

                    {/* Breadcrums */}
                    

                    {/* Content */}
                    <div className='max-h-screen font-Nunito lg:col-span-8 bg-[#f1f5f9] sm:pt-20 text-left text-sm/6 px-10' data-aos='fade-in'>
                        {/* Breadcrumb */}
                        <div className="text-[#64748b] mt-5 text-sm/6 sm:text-sm/6 capitalize">
                            Dashboard <span className='text-slate-300'>/  </span>
                            {
                                (location.pathname == '/') ? (
                                    <span className="font-semibold text-[#56BD72]">Home</span>
                                ) : (
                                    <span className="font-semibold text-[#56BD72]">{location.pathname.replace('/', '')}</span>
                                 )
                            }
                        </div>

                        {/* Main Content */}
                        <div className="text-[#64748b] mt-4">
                            {children}
                        </div>
    
                    </div>
                
            </div>
        </div>

    )
}

export default Main