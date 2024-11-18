import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    const { user, loading }= useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner text-secondary"></span>
    }
    if (!user) {
        return <Navigate to='/login'></Navigate>;
    }
    return children;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.object
}