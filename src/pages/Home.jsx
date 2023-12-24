import { useState, useEffect } from 'react'
import '../App.css'
import Header from '../components/Headers'
import Sidebarmenu from '../components/Sidebarmenu'
import Content from '../components/Content'

import AOS from 'aos'
import 'aos/dist/aos.css'

// Main Layout
import MainLayout from '../layouts/MainLayout'

import DataTable from 'react-data-table-component';

// Redux
import { useSelector, useDispatch } from 'react-redux';

import { deposit, withdraw } from '../../config/redux/reducers/balanceSlice';
import { LOGOUT } from '../../config/redux/reducers/authSlice';

function App() {
  
  const storeData = useSelector(state => state);

  const dispatch = useDispatch();

  const balance = useSelector(state => state.balance);

  // diane.fitria+user@gmail.com

    const handleDeposit = () => {
      // event.preventDefault();
      dispatch(
        deposit(10)
      )
      // alert('123')
    };

    const handleWithdraw = () => {
      // event.preventDefault();
      dispatch(
        withdraw(10)
      )
    };

  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const columns = [
    
    {
        name: 'Title',
        selector: row => row.title,
    },

    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

  const animationClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';

  useEffect(() => {
    AOS.init();
    // console.log(withdraw);
  }, [])

  const handleLogout = () => {
    dispatch(LOGOUT())
    // dispatch({
    //     type: 'LOGOUT',
    // })
  }

  return (
    <>
      {/* <div className='mx-auto w-full min-h-screen bg-[wh]' data-aos='fade-left'>
        <div className='flex flex-col lg:grid lg:grid-cols-10'>
            
            <Sidebarmenu/>

            <Content/>

            
        </div>
      </div> */}
      <MainLayout>

        {/* Greeting */}
        <div className="flex flex-row justify-between grid sm:grid-cols-2 grid-cols-1 gap-0">
            <div className="flex flex-row sm:py-2 px-2 items-center flex-1">
                <div className="sm:mt-0 h-10 w-10 sm:h-20 sm:w-20 rounded-[100%] bg-[#D9D9D9]">

                </div>
                <div className="sm:mt-4 sm:ml-4 ml-2">
                    <p className="text-[#56BD72] sm:text-4xl font-bold">
                        Welcome back, Menica! 
                        {/* <br/> */}
                        {/* {storeData.name} */}
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
            <div className="flex justify-start mt-4">
                        <div className={`grow h-[400px] sm:mt-5 col-span-2 py-2 px-2 rounded-md bg-[#F8FAFC] mr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}>
                            <DataTable
                                columns={columns}
                                data={data}
                                pagination
                            />                 
                        </div>
                        {/* <div className={`grow h-[400px] sm:mt-5 col-span-5 py-2 px-2 rounded-md bg-[#F8FAFC] mr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}>
                                                
                        </div> */}
              </div>

              <div className='bg-[white] px-2 py-2 font-bold font-DM' onClick={handleLogout}>
                logout
              </div>

              <div className='bg-[white] px-2 py-2 font-bold font-DM mt-4' onClick={handleLogout}>
             

                  <section>
                  <h2>Total Saldo</h2>
                  <p>$ {balance.total}</p>
                </section>
                <br/>
                <section>
                  <div
                  onClick={handleDeposit}>Deposit $10</div>

                  <div 
                  onClick={handleWithdraw}>Withdraw $10</div>
                </section>
                </div>


        </div>

      </MainLayout>
    </>
  )
}

export default App
