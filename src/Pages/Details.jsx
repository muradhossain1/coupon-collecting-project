import { useLoaderData } from "react-router-dom";
import DetailsCard from "../Componentes/DetailsCard";


const Details = () => {
    const brands = useLoaderData();
    const { brand_logo, brand_name, rating, coupons } = brands;
    return (
        <div className="p-6 rounded-xl border md:w-4/5 mx-auto space-y-4 mt-6">
            <div>
                <div className=" flex items-center justify-center">
                    <img className="rounded-lg mb-4 md:h-96 " src={brand_logo} alt="" />
                </div>
                <div className="flex justify-between items-center px-20">
                    <h2 className="text-3xl py-4 font-bold">{brand_name}</h2>
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
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    coupons.map((coupon, index) => <DetailsCard key={index} coupon={coupon}></DetailsCard>)
                }
            </div>
        </div>
    );
};

export default Details;