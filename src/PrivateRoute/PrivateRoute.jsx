import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    const { user, loading }= useContext(AuthContext);
    const location = useLocation()
    if(user){
        return children
    }
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-spinner text-secondary"></span></div>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>;
    }
    return children;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.object
}