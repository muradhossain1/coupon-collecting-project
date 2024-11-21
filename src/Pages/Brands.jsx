import { useLoaderData } from "react-router-dom";
import BrandCards from "../Componentes/BrandCards";
import { useState } from "react";


const Brands = () => {
    const brands = useLoaderData();

    const [searchTerm, setSearchTerm] = useState('');


    const searchBrands = brands.filter(brand =>
        brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="text-center mt-8">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search here"
                    className="input input-bordered input-primary w-full max-w-lg" />
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-center py-6 text-slate-600">Coupon Collecting All Brands</h2>
            <div className="min-h-screen space-y-6">
                {searchBrands.length > 0 && (
                        searchBrands.map((brand, index) => (
                            <BrandCards key={index} brand={brand} />
                        ))
                    )}
            </div>
        </div>
    );
};

export default Brands;