import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const TopBrands = () => {
    return (
        <div className="mt-12 space-y-6">
            <div className="text-center">
                <h2 className="text-4xl font-semibold">Coupon Brands Marquees</h2>
                <p></p>
            </div>
            <div className="flex items-center p-4 bg-gray-100 ">
                <Marquee pauseOnHover={true} className="">
                    <Link to='/details' className="mr-10">Logo</Link>
                    <Link to='/details' className="mr-10">logo</Link>
                    <Link to='/details' className="mr-10">logo</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default TopBrands;