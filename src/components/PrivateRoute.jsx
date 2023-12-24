// PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function PrivateRoute({ children }) {

    const storeData = useSelector(state => state);
    const balance = useSelector(state => state.balance);
    // const auth = storeData.auth.isAuthenticated;
    // const auth = localStorage.getItem('token')
    const auth = storeData.auth.isAuthenticated;
    // console.log(auth);
    console.log(storeData);
    console.log(balance.total);
    return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;