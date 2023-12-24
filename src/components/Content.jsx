import { useEffect } from "react";
import { useLocation } from "react-router-dom"

function Content(){

    const location = useLocation();

    useEffect(() => {
        console.log('Current Route:', location.pathname);
    })

    return(
        <div className='min-h-screen font-Nunito lg:col-span-8 bg-[#f1f5f9] sm:pt-20 text-left text-sm/6 px-10'>
              
                {/* Breadcrumb */}
                <div className="text-[#64748b] mt-5 text-xs sm:text-base">
                    Breadcrumb {' > '} <span className="font-semibold text-[#56BD72]">Dashboard</span>
                </div>

                {/* Main Content */}
                <div className="text-[#64748b] mt-4">
                    
                    {/* Greeting */}
                    <div className="flex flex-row justify-between grid sm:grid-cols-2 grid-cols-1 gap-0">
                        <div className="flex flex-row sm:py-2 px-2 items-center flex-1">
                            <div className="sm:mt-4 h-10 w-10 sm:h-20 sm:w-20 rounded-[100%] bg-[#D9D9D9]">

                            </div>
                            <div className="sm:mt-4 sm:ml-4 ml-2">
                                <p className="text-[#56BD72] sm:text-4xl font-bold">
                                    Welcome back, Menica! 
                                </p>
                                <p className="text-xs sm:text-lg">
                                    Happy to see you again on your dashboard.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row sm:py-2 sm:px-2 items-center flex-1 sm:justify-center mt-4">
                            <div className="grow sm:grow-0 rounded-md px-2 py-2 sm:mt-4 sm:rounded-md bg-[#56BD72] sm:px-5 sm:py-2 text-white font-semibold text-xs">
                                menica.site/ryandiane
                            </div>
                            <div className="px-4 py-4 sm:px-4 sm:py-4 w-10 ml-2 border-[#CCD5E0] border-2 sm:mt-4 rounded-md bg-[#F8FAFC] text-white font-semibold">
                                
                            </div>
                            <div className="px-4 py-4 sm:px-4 sm:py-4 w-10 ml-2 mr-2 border-[#CCD5E0] border-2 sm:mt-4 rounded-md bg-[#F8FAFC] text-white font-semibold">
                                
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex justify-start mt-4">
                        <div className={`grow h-[400px] sm:mt-5 col-span-2 py-2 px-2 rounded-md bg-[#F8FAFC] mr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}>
                                                
                        </div>
                        <div className={`grow h-[400px] sm:mt-5 col-span-5 py-2 px-2 rounded-md bg-[#F8FAFC] mr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}>
                                                
                        </div>
                    </div>
                </div>


        </div>
    )
}

export default Content