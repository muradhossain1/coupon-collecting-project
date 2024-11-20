import { useLoaderData } from "react-router-dom";
import Banner from "../Componentes/Banner";
import TopBrands from "../Componentes/TopBrands";
import BrandsOnSell from "../Componentes/BrandsOnSell";
import WorkProcess from "../Componentes/WorkProcess";
import QuestionSection from "../Componentes/QuestionSection";


const Home = () => {
    const brands = useLoaderData();
    console.log(brands)
    return (
        <div>
            <Banner></Banner>
            <main>
                <TopBrands brands={brands}></TopBrands>
                <div className=" mt-12">
                    <h2 className="text-3xl font-extrabold text-slate-600">Brands on Sell Coupon</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                        {
                            brands.map(brand => <BrandsOnSell key={brand._id} brand={brand}></BrandsOnSell>)
                        }
                    </div>
                </div>
                <WorkProcess></WorkProcess>
                <QuestionSection></QuestionSection>
            </main>
        </div>
    );
};

export default Home;