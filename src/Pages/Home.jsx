import { useLoaderData } from "react-router-dom";
import Banner from "../Componentes/Banner";
import TopBrands from "../Componentes/TopBrands";
import BrandsOnSell from "../Componentes/BrandsOnSell";


const Home = () => {
    const brands = useLoaderData();
    console.log(brands)
    return (
        <div>
            <Banner></Banner>
            <main>
                <TopBrands></TopBrands>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                    {
                        brands.map(brand => <BrandsOnSell key={brand._id} brand={brand}></BrandsOnSell>)
                    }
                </div>
            </main>
        </div>
    );
};

export default Home;