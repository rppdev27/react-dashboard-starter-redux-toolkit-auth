
import axios from "axios"
import { LOGIN_SUCCESS } from './reducers/authSlice';


// authActions.js
// export const loginSuccess = (token) => ({
//     type: 'LOGIN_SUCCESS',
//     payload: { token },
//   });
  
//   export const logout = () => ({
//     type: 'LOGOUT',
//   });

export const loginUser = (payload, navigate) => {
  
  return (dispatch) => {

    axios.post('https://api-v2.menica.pro/' + 'user/login', payload)
    .then( response => {
        // const { token } = response.data.data;
        // dispatch({
        //     type: 'LOGIN_SUCCESS',
        //     payload: response.data.data
        // })

        dispatch(
          LOGIN_SUCCESS( { payload: response.data.data } )
        )

        navigate('/');
    })
    .catch(err => {
        if(err) { console.log(err) }
    })

  };
};




