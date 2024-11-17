import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Componentes/Login";
import Register from "../Componentes/Register";
import About from "../Pages/About";
import Brands from "../Pages/Brands";
import MyProfile from "../Pages/MyProfile";

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
                element :<Brands></Brands>
            },
            {
                path : '/myProfile',
                element :<MyProfile></MyProfile>
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