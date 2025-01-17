import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Componentes/Login";
import Register from "../Componentes/Register";
import About from "../Pages/About";
import Brands from "../Pages/Brands";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../Pages/Details";
import Errorpage from "../Pages/Errorpage";
import UpdateProfile from "../Componentes/UpdateProfile";
import ForgetPassword from "../Componentes/ForgetPassword";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement :<Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json'),
            },
            {
                path: '/brands',
                element:<Brands></Brands>,
                loader: () => fetch('/brands.json'),
            },
            {
                path: '/myProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/details/:_id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: async ({ params }) => {
                    const result = await fetch('/brands.json');
                    const data = await result.json();
                    const singleData = data.find(brand => brand._id == params._id);
                    return singleData;
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/forget',
                element: <ForgetPassword></ForgetPassword>
            },
        ]
    }
])
export default Router;