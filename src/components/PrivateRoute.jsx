// PrivateRoute.js
import { Navigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';

function PrivateRoute({ children }) {

    const storeData = useSelector(state => state);
    const auth = storeData.auth.isAuthenticated;
    return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;