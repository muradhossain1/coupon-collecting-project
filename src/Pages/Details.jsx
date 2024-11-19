import { useLoaderData } from "react-router-dom";


const Details = () => {
    const brands = useLoaderData();
    const { brand_logo, brand_name, rating } = brands;
    return (
        <div className="p-6 rounded-xl border md:w-3/5 mx-auto space-y-4">
            <img className="rounded-lg" src={brand_logo} alt="" />
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
            </div>
        </div>
    );
};

export default Details;