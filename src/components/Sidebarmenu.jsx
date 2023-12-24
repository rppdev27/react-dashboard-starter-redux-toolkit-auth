import { useState, useEffect } from "react"
import { useLocation, Link } from 'react-router-dom';
import "react-toggle/style.css" 
import { BeakerIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid'

function Sidebarmenu(){
    const [menu, setMenu] = useState([
        {
            title: 'Main Menu',
            link: [
                {
                    name: 'dashboard',
                    icon: '',
                    active: true,
                    path: '/'
                },
                {
                    name: 'undangan saya',
                    icon: '',
                    active: false,
                    path: '/undangan'
                },
                {
                    name: 'tamu',
                    icon: '',
                    active: false,
                    path: '/tamu'
                },
                {
                    name: 'hadiah',
                    icon: '',
                    active: false,
                    path: '/hadiah'
                },
                {
                    name: 'musik',
                    icon: '',
                    active: false,
                    path: '/musik'
               }]
        },
        {
            title: 'Afiliasi',
            link: [
                {
                    name: 'Dashboard',
                    icon: '',
                    active: true,
                },
                {
                    name: 'Materi Promosi',
                    icon: '',
                    active: false,
                },
            ]
        },
        {
            title: 'Reseller',
            link: [
                {
                    name: 'Dashboard',
                    icon: '',
                    active: true,
                },
                {
                    name: 'Materi Promosi',
                    icon: '',
                    active: false,
                },
            ]
        }, 
        {
            title: 'Account',
            link: [
                {
                    name: 'Edit Profile',
                    icon: '',
                    active: true,
                },
                {
                    name: 'Logout',
                    icon: '',
                    active: false,
                },
            ]
        }, 
        
    ])

    const location = useLocation();

    useEffect(() => {
        // AOS.init();
        console.log(location);
      }, [])

    const handleTofuChange = (e) => {
        // alert('123')
        console.log(e.target.checked)
    }

    const [toogleStatus, setToogleStatus] = useState(false)

    const [isDarkMode, setIsDarkMode] = useState(false);

        useEffect(() => {
            // Apply dark mode styles here based on isDarkMode state
            document.body.classList.toggle('dark', isDarkMode);
        }, [isDarkMode]);

        const toggleDarkMode = (e) => {
            // setIsDarkMode((prevMode) => !prevMode);
            setIsDarkMode(e.target.checked)
        };

    return(
        <div className='hidden sm:inline font-Nunito lg:col-span-2 bg-[white] dark:bg-black shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            {/* Logo
            <img src="https://asset.menica.pro/menicav4/menica_greenlogo.png" width="150px" className="pl-8 mt-5"/>

            List Menu
            <div className="flex flex-col text-left text-sm/6 pl-8 grow bg-[green]">
                    {menu.map((item) => (
                        <>
                            <div className="font-Nunito mt-6 text-[#56BD72] font-semibold">
                                {item.title}
                            </div>
                            {
                                item.link.map((link) =>(
                                    <div className="flex flex-row items-center cursor-pointer hover:text-[black] font-normal mt-1">
                                        <div className={`py-2 px-2 rounded-md  ${ link.path == location.pathname ? 'bg-[#56BD72] border-[#56BD72]' : 'bg-[#F8FAFC] border-[#CCD5E0]'} border-[1px] mr-2`}>
                                         </div>
                                        <Link to={`${link.path}`} className={`${ link.path == location.pathname ? 'text-[#56BD72] font-semibold' : 'text-[#64748b]'} flex items-center font-[300] tracking-normal capitalize `}>
                                            {link.name}
                                        </Link>
                                    </div>
                                ))
                            }
                            
                            
                        </>
                    ))}

            </div>
            <div className="text-sm/6 text-[#64748b] bg-[red] grow">
                Copyright 2023 © Bislin 
            </div> */}
            {/* <div className="flex-non bg-[purple]">
                Lorem Ipsum 1
            </div>
            <div className="grow bg-[yellow]">
                Lorem Ipsum 2
            </div>
            <div className="flex-none bg-[white]">
                Lorem Ipsum 3
            </div> */}
            <div className="flex flex-col min-h-screen">
                <div className="flex-none">
                {/* Logo */}
                    <img src="https://asset.menica.pro/menicav4/menica_greenlogo.png" width="150px" className="pl-8 mt-5"/>

                </div>
                {/* List Menu */}
                <div className="flex grow flex-col text-left text-sm/6 pl-8">
                        {menu.map((item) => (
                            <>
                                <div className="font-Nunito mt-6 text-[#56BD72] font-semibold">
                                    {item.title}
                                </div>
                                {
                                    item.link.map((link) =>(
                                        <div className="flex flex-row items-center cursor-pointer hover:text-[black] font-normal mt-1">
                                            <div className={`py-2 px-2 rounded-md  ${ link.path == location.pathname ? 'bg-[#56BD72] border-[#56BD72]' : 'bg-[#F8FAFC] border-[#CCD5E0]'} border-[1px] mr-2`}>
                                            </div>
                                            <Link to={`${link.path}`} className={`${ link.path == location.pathname ? 'text-[#56BD72] font-semibold' : 'text-[#64748b] dark:text-[#94a3b8] dark:text-zinc-50'} flex items-center font-[300] tracking-normal capitalize `}>
                                                {link.name}
                                            </Link>
                                        </div>
                                    ))
                                }
                            </>
                        ))}
                </div>
                <div className="flex flex-col text-[9pt] text-[#64748b] text-center justify-center align-middle grow bg-[white] items-center">
                        {/* <label>
                        <Toggle
                            defaultChecked={toogleStatus}
                            icons={false}
                            onChange={toggleDarkMode}/>
                        </label> */}
                        <div className="mt-2 cursor-pointer px-1 py-1 rounded-md bg-[white] border-[#CCD5E0] hover:border-[black] border-[1px]">
                            <SunIcon className="h-6 w-6 text-[#CCD5E0]" />
                            <MoonIcon className="h-4 w-4 text-[#CCD5E0] hover:text-[black]" />
                        </div>
                        {/* <div>
                            <MoonIcon className="h-6 w-6 text-blue-500" />
                            <SunIcon className="h-6 w-6 text-blue-500" />
                        </div> */}
                    
                    {/* Copyright 2023 © Bislin  */}
                    <div className="mt-2">
                        Copyright 2023 © Bislin 
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Sidebarmenu