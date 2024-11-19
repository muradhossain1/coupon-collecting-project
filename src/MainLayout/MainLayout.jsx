import { Outlet } from "react-router-dom";
import Navber from "../Componentes/Navber";
import Footer from "../Componentes/Footer";


const MainLayout = () => {
    return (
        <div>
            <header className="md:w-11/12 mx-auto">
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