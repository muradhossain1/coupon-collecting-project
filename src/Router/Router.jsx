import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Componentes/Login";
import Register from "../Componentes/Register";
import About from "../Pages/About";
import Brands from "../Pages/Brands";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element :<Home></Home>
            },
            {
                path : '/brands',
                element :<PrivateRoute><Brands></Brands></PrivateRoute>
            },
            {
                path : '/myProfile',
                element :<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/login',
                element :<Login></Login>
            },
            {
                path : '/register',
                element :<Register></Register>
            },
        ]
    }
])
export default Router;