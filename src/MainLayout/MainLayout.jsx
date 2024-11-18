import { Outlet } from "react-router-dom";
import Navber from "../Componentes/Navber";


const MainLayout = () => {
    return (
        <div className="md:w-11/12 mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;