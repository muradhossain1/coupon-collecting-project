import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const TopBrands = ({ brands }) => {
    return (
        <div className="mt-12 space-y-6">
            <div>
                <h2 className="text-3xl font-extrabold text-center">Coupon Collecting Marquee</h2>
            </div>
            <div className="flex items-center p-4 bg-gray-50 ">
                <Marquee pauseOnHover={true} className="">
                    <div className="flex">
                        {
                            brands.map(brand => <NavLink to={`/details/${brand._id}`} key={brand._id} className='mr-28'>
                                <div className="flex flex-col items-center gap-2">
                                    <img className="w-20 h-16 rounded-lg" src={brand.brand_logo} alt="" />
                                    <h2 className="font-semibold">{brand.brand_name}</h2>
                                </div>
                            </NavLink>)
                        }
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default TopBrands;

TopBrands.propTypes = {
    brands: PropTypes.array
}