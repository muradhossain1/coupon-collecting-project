import { Outlet } from "react-router-dom";
import Navber from "../Componentes/Navber";
import Footer from "../Componentes/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MainLayout = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <header>
            {user ? <h2 className="text-lg font-semibold text-center mt-4">{user?.displayName} Welcome to Discount PRO! </h2> : ''}
                <Navber></Navber>
            </header>
            <main className="md:w-11/12 mx-auto p-4 md:p-0">
                <Outlet></Outlet>
            </main>
            <footer className="mt-12">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;