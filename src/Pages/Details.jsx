import { useLoaderData } from "react-router-dom";
import DetailsCard from "../Componentes/DetailsCard";


const Details = () => {
    const brands = useLoaderData();
    // const { brand_logo, brand_name, rating, coupons } = brands;
    const { coupons } = brands;
    console.log(coupons)
    return (
        // <div className="p-6 rounded-xl border md:w-3/5 mx-auto space-y-4">
        <div className="md:w-4/5 mx-auto">
            {/* <img className="rounded-lg" src={brand_logo} alt="" />
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{brand_name}</h2>
                <div className='flex gap-2 items-center'>
                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-2xl">{rating}</p>
                </div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    coupons.map((coupon, index) => <DetailsCard key={index} coupon={coupon} brands={brands}></DetailsCard>)
                }
            </div>
        </div>
    );
};

export default Details;