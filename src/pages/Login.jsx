import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../config/redux/reducers/authSlice';

import axios from 'axios';

// Main Layout
import MainLayout from '../layouts/MainLayout'
import store from "../../config/redux/store";

import { deposit, withdraw } from '../../config/redux/reducers/balanceSlice';


function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const storeData = useSelector(state => state);
    const location = useLocation();

    const balance = useSelector(state => state.balance);

    const auth = storeData.auth.isAuthenticated;

    const { isAuthenticated } = useSelector(
      (state) => state
    )

  // diane.fitria+user@gmail.com

    const handleDeposit = (event) => {
      event.preventDefault();
      dispatch(
        deposit(10)
      )
      // alert('123')
    };const handleWithdraw = (event) => {
      event.preventDefault();
      dispatch(
        withdraw(10)
      )
    };

    useEffect(() => {
        // console.log('Current Route:', location.pathname);
        // console.log(storeData);
        // console.log(auth)
    })

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        dispatch(loginUser(formData)).then( Response => {
          console.log(Response);
          navigate('/');
        });
      };
    
    return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          {/* Login <p>$ {balance.total}</p> */}
          {auth}
          </h2>
        <section>
                  <div
                  onClick={handleDeposit}>Deposit $10</div>

                  <div 
                  onClick={handleWithdraw}>Withdraw $10</div>
                </section>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log in
          </button>
          <button
            onClick={Navigate('/undangan')}
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go To Dashboard
          </button>
          {/* <Navigate to="/undangan" replace={true} /> */}
        </form>
      </div>
    </div>
    </>
    )
}

export default Login