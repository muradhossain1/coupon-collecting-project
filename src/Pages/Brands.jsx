import { useLoaderData } from "react-router-dom";
import BrandCards from "../Componentes/BrandCards";


const Brands = () => {
    const brands = useLoaderData();
    console.log(brands)
    return (
        <div>
            <h2  className="text-4xl font-extrabold text-center py-6">Coupon Collecting Brands</h2>
            <div className="min-h-screen space-y-6">
                {
                    brands.map(brand =><BrandCards key={brand._id} brand={brand}></BrandCards>)
                }
            </div>
        </div>
    );
};

export default Brands;